import {prepareInquiry,emailHref,services} from './inquiry-model.mjs';
const form=document.querySelector('#inquiry-form');
const preview=document.querySelector('#message-preview');
const panel=document.querySelector('#message-panel');
const email=document.querySelector('#email-brief');
const copyStatus=document.querySelector('#copy-status');
let subject='Project inquiry';
const chosen=new URLSearchParams(location.search).get('service');
if(chosen && Object.hasOwn(services,chosen))form.elements.service.value=chosen;
for(const field of form.elements){if(field.name)field.addEventListener('input',()=>field.setCustomValidity(''));}
form.addEventListener('submit',event=>{
 event.preventDefault();
 for(const field of form.elements){if(field.name)field.setCustomValidity('');}
 const result=prepareInquiry(Object.fromEntries(new FormData(form)));
 if(!result.ok){
  for(const [key,message] of Object.entries(result.errors))form.elements.namedItem(key)?.setCustomValidity(message);
  document.querySelector('#form-status').textContent='Please check the highlighted fields.';
  form.reportValidity();return;
 }
 subject=result.subject;preview.value=result.body;email.href=emailHref(subject,preview.value);
 panel.classList.remove('hidden');document.querySelector('#form-status').textContent='Message prepared. Review it and choose how to share it below.';
 copyStatus.textContent='';document.querySelector('#message-title').focus();panel.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
});
preview.addEventListener('input',()=>{email.href=emailHref(subject,preview.value);copyStatus.textContent='';});
document.querySelector('#copy-brief').addEventListener('click',async()=>{
 try{await navigator.clipboard.writeText(preview.value);copyStatus.textContent='Copied. Open LinkedIn and paste it into your message to Christian.';}
 catch{preview.focus();preview.select();copyStatus.textContent='Select and copy the message above, then paste it into email or LinkedIn.';}
});
