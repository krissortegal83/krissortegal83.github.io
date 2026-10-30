# Christian Ortega Lugo — Personal Site

[Visit the site](https://krissortegal83.github.io/) · [Case studies](https://krissortegal83.github.io/case-studies/) · [Services](https://krissortegal83.github.io/services/) · [Profile PDF](https://krissortegal83.github.io/assets/christian-ortega-lugo-profile.pdf)

A clear entry point to my professional background, three case studies, six live demos and consulting scopes. English is the main language, with Spanish summaries.

## Content and publication

The independent case studies explain problems, decisions, acceptance checks and limitations. They use fictional data and were developed with AI assistance; they are not client case histories.

GitHub Actions publishes the static site. The workflow decodes `assets/christian-profile.pdf.b64` into the downloadable PDF. To replace the PDF, base64-encode the reviewed document into that source file before publishing. No third-party runtime or visitor sign-in is needed.

## En español

Mi sitio reúne casos de estudio, demos, servicios y una presentación descargable. Los casos explican mi enfoque y sus límites; no atribuyen resultados ficticios a clientes.

## Consulting offers and contact

The services page describes three bounded starting engagements. The contact page prepares an editable inquiry for email or LinkedIn; it does not submit visitor data to a server. Email opens the visitor's configured email application. Clipboard access has a manual-copy fallback. No analytics or form submissions are stored by the page.

Run `node --test tests/inquiry.test.mjs` to check message validation and email encoding. GitHub Actions runs these checks before publication.
