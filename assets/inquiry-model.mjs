export const recipient = 'srty.53@gmail.com';
export const services = Object.freeze({unsure:'Help choosing a starting point',process:'Process Clarity Review',readiness:'Go-Live Readiness Review',integration:'Integration & Workflow Discovery',role:'A role or partnership'});
export const timings = Object.freeze({exploring:'Exploring options',soon:'As soon as practical',quarter:'In the next 1–3 months',flexible:'Flexible'});
const clean = value => String(value ?? '').trim();
export function prepareInquiry(raw){
 const data = Object.fromEntries(['service','name','company','challenge','outcome','timing'].map(k=>[k,clean(raw[k])]));
 const errors = {};
 if(!Object.hasOwn(services,data.service)) errors.service='Choose one of the listed starting points.';
 if(!data.name || data.name.length>80 || /[\r\n]/.test(data.name)) errors.name='Enter your name (up to 80 characters).';
 if(data.company.length>100) errors.company='Use up to 100 characters for the company or team.';
 if(data.challenge.length<20 || data.challenge.length>600) errors.challenge='Describe the situation in 20–600 characters.';
 if(data.outcome.length>300) errors.outcome='Use up to 300 characters for the desired outcome.';
 if(!Object.hasOwn(timings,data.timing)) errors.timing='Choose one of the listed timing options.';
 if(Object.keys(errors).length) return {ok:false,errors};
 const subject = `Project inquiry: ${services[data.service]}`;
 const body = `Hello Christian,\n\nI would like to discuss: ${services[data.service]}.\n\nName: ${data.name}\nCompany / team: ${data.company || 'Not specified'}\n\nSituation:\n${data.challenge}\n\nDesired outcome:\n${data.outcome || 'I would appreciate help clarifying this.'}\n\nTiming: ${timings[data.timing]}\n\nBest regards,\n${data.name}`;
 return {ok:true,data,subject,body};
}
export function emailHref(subject,body){return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;}
