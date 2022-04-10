import { Box, Typography, Link } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';

const TypographyGB = ({ children, bold, sx, ...props }) => (
  <Typography {...props} sx={bold ? { my: '20px', fontWeight: 700, ...sx } : sx} gutterBottom>
    {children}
  </Typography>
);

export const accessibilityStatementTranslations = {
  fi: {
    title: 'Saavutettavuusseloste',
    h1: 'Turku sovelluksen saavutettavuusseloste',
    description:
      'Tämä saavutettavuusseloste koskee Turku sovellusta ja on laadittu 10.04.2022. Tämän digipalvelun saavutettavuuden on arvioinut Dataatti Oy.',
    status: 'Digipalvelun saavutettavuuden tila',
    requirements: 'Täyttää kriittiset saavutettavuusvaatimukset',
    extServices:
      'Sovelluksen sisältö pohjautuu ulkoisista palveluista haettavaan dataan, kuten kerrokantasi ja kaupungin tiedotteet. Mikäli näistä palveluista haettavassa datassa on saavutettavuuteen vaikuttavia puutteita vaikuttaa se negatiivisesti myös tämän sovelluksen saavutettavuuteen.',
    twitterEmbedded: 'Twitter-upotus',
    twitterEmbeddedDesc:
      'Liikennetietojen esittämiseen käytettävä Twitter-upotus on kolmannen osapuolen tuottama palvelu, jonka saavutettavuuteen ei Turun kaupunki voi vaikuttaa.',
    noticeFlaw: 'Huomasitko saavutettavuuspuutteen digipalvelussamme?',
    reportToUs: 'Kerro se meille ja teemme parhaamme puutteen korjaamiseksi',
    onlineForm: 'Verkkolomakkeella',
    reportViaForm: 'Anna saavutettavuuspalautetta tällä verkkolomakkeella',
    email: 'Sähköpostilla',
    authority: 'Valvontaviranomainen',
    beforeAuthority:
      'Jos huomaat sivustolla saavutettavuusongelmia, anna ensin palautetta meille eli sivuston ylläpitäjälle. Vastauksessa voi mennä 14 päivää. Jos et ole tyytyväinen saamaasi vastaukseen tai et saa vastausta lainkaan kahden viikon aikana, voit tehdä ilmoituksen Etelä-Suomen aluehallintovirastoon. Etelä-Suomen aluehallintoviraston sivulla kerrotaan tarkasti, miten ilmoituksen voi tehdä ja miten asia käsitellään.',
    authorityContact: 'Valvontaviranomaisen yhteystiedot',
    accessibilityUnit: 'Etelä-Suomen aluehallintovirasto, Saavutettavuuden valvonnan yksikkö',
    phoneNumber: 'puhelinnumero',
    constantImproving: 'Teemme jatkuvasti työtä saavutettavuuden parantamiseksi',
    mostRecentStatement: 'Digipalveluistamme on tehty saavutettavuusarviointi',
    committed: 'Olemme sitoutuneet digipalveluiden saavutettavuuden parantamiseen',
    plannedImprovement:
      'Turun kaupungin saavutettavuusosaamista kehitetään suunnitelmallisesti ja määrätietoisesti. Kaupungin saavutettavuuden sopimustoimittajat tulevat arvioimaan kaupungin nykyiset verkkopalvelut. Arvioinnin perusteella palveluiden saavutettavuutta kehitetään lain vaatimalle tasolle kunkin palvelun määräaikaan mennessä. Uusien verkkopalveluiden kehittämisessä ja hankinnassa saavutettavuus huomioidaan alusta lähtien. Saavutettavuuskoulutusta järjestetään kaikille osapuolille, jotka osallistuvat verkkopalveluiden kehittämiseen ja niiden sisältöjen tuottamiseen. Kaupungissa on käynnissä projekti Saavutettavuuslain vaatimusten täyttämiseksi.',
  },
  en: {
    title: 'Accessibility statement',
    h1: 'Accessibility statement for Turku application',
    description:
      'This accessibility statement concerns the Turku application and it has been drafted on the 10th of April 2022. The accessibility of this digital service has been evaluated by Dataatti Oy.',
    status: 'The Status of Web Accessibility of the Digital Service',
    requirements: 'The application meets the critical requirements set for the web accessibility.',
    extServices:
      'The content of the application is based on data retrieved from external services, such as voice your opinion and bulletin. If there are gaps in the data retrieved from these services that affect accessibility, it will also negatively affect the accessibility of this application.',
    twitterEmbedded: 'Embedded Twitter',
    twitterEmbeddedDesc:
      'The Twitter embedding used to present traffic information is a service provided by a third party, the accessibility of which cannot be affected by the City of Turku.',
    noticeFlaw: 'Did you notice a problem in the web accessibility of our digital service?',
    reportToUs: 'Please tell us about it and we will do our best to fix the problem',
    onlineForm: 'On a web form',
    reportViaForm:
      'Please feel free to give feedback on the web accessibility of our digital service on this web form',
    email: 'By e-mail',
    authority: 'Supervisory Authority',
    beforeAuthority:
      'If you notice any problem in the web accessibility of the website, please first give feedback to us as the site provider. Please note that it may take 14 days to get an answer. If you are not happy with the answer you have received or you do not get any answer in the period of two weeks, you can make AVI Southern Finland a request for accessibility. Please learn on the website of AVI Southern Finland how to do a request and how the matter will be treated (in Finnish).',
    authorityContact: 'Contact Information of the Supervisory Authority',
    accessibilityUnit: 'AVI Southern Finland, Web Accessibility Unit',
    phoneNumber: 'phone number',
    constantImproving:
      'We work continuously to improve the web accessibility of the digital services',
    mostRecentStatement:
      'The date on which the web accessibility of our digital services has been evaluated',
    committed: 'We work on improving the web accessibility of the digital services',
    plannedImprovement:
      'The expertise and knowhow of the personnel regarding the web accessibility is being developed systematically and purposefully by the City of Turku. The contract vendors regarding the web accessibility will evaluate the current digital services of the City of Turku. Based on the evaluation, the web accessibility of the digital services will be developed to the level required by the law by the deadline stated for each service. The web accessibility will be considered from the outset in the development and acquisition of new online services. Training in web accessibility is organised for all parties involved in the development of online services and in the production of their content. The City of Turku is working on a project to meet the requirements set by the Finnish Act on the provision of digital services (Saavutettavuuslaki).',
  },
  sv: {
    title: 'Tillgänglighetsutlåtande',
    h1: 'Tillgänglighetsutlåtandet för Åbo applikation',
    description:
      'Denna tillgänglighetsutlåtande berör Åbo applikation och har utarbetats 10.04.2022. Tillgängligheten i denna digitjänst har bedömts av Dataatti Oy.',
    status: 'Digitjänstens tillgänglighet just nu',
    requirements: 'Tjänsten uppfyller tillgänglighetskraven',
    extServices:
      'Innehållet i applikationen är baserat på data hämtade från externa tjänster, såsom din säg din åsikt och meddelande. Om det finns luckor i data som hämtas från dessa tjänster som påverkar tillgängligheten kommer det också att påverka tillgängligheten för denna applikation negativt.',
    twitterEmbedded: 'Inbäddad Twitter',
    twitterEmbeddedDesc:
      'Twitter-inbäddningen som används för att presentera trafikinformation är en tjänst som tillhandahålls av tredje part, vars tillgänglighet inte kan påverkas av Åbo stad.',
    noticeFlaw: 'Upptäckte du tillgänglighetsbrister i vår digitjänst?',
    reportToUs: 'Tala om det för oss! Vi gör vårt bästa för att fixa bristerna.',
    onlineForm: 'Webbformulär',
    reportViaForm: 'Ge feedback om tillgängligheten med detta webbformulär',
    email: 'E-post',
    authority: 'Tillsynsmyndigheten',
    beforeAuthority:
      'Om du upptäcker ett tillgänglighetsproblem på webbplatsen, ge feedback i första hand till oss d.v.s. vi som upprätthåller webbplatsen. Det kan dröja upp till 14 dagar innan du får svar. Om du är missnöjd med svaret eller inte får något svar alls efter två veckor, kan du göra en anmälan till Regionförvaltningsverket i Södra Finland. På webbplatsen för Regionförvaltningsverket i Södra Finland finns noggranna instruktioner för hur man gör en anmälan och hur ärendet hanteras.',
    authorityContact: 'Tillsynsmyndighetens kontaktuppgifter',
    accessibilityUnit:
      'Regionförvaltningsverket i Södra Finland, Enheten för tillgänglighetstillsyn',
    phoneNumber: 'telefonnummer',
    constantImproving: 'Vi jobbar kontinuerligt för bättre tillgänglighet',
    mostRecentStatement: 'Det har gjorts en tillgänglighetsbedömning av våra digitjänster',
    committed: 'Vi har bundit oss till att förbättra tillgängligheten i digitjänsterna',
    plannedImprovement:
      'Åbo stads tillgänglighetskompetens utvecklas systematiskt och målmedvetet. Stadens avtalsleverantörer för tillgänglighet kommer att göra en bedömning av stadens nuvarande webbtjänster. På basen av bedömingen kommer tillgängligheten i tjänsterna utvecklas att motsvara de lagenliga kraven för vardera tjänst inom utsatt tid. Vid utveckling och anskaffning av nya webbtjänster tas tillgängligheten i beaktande från början. Alla parter som deltar i utvecklingen och innehållsproduktinen av webbtjänsterna blir utbildade i tillgänglighetsfrågor. Staden har ett pågående projekt för att uppfylla Tillgänglighetslagens krav.',
  },
};

const SaavutettavuusSeloste = () => {
  const router = useRouter();
  const locale = (router.locale as Lang) ?? 'fi';

  const mostRecentStatementDate = '10.04.2022';

  const t = accessibilityStatementTranslations[locale];
  return (
    <Box sx={{ mb: '20px' }}>
      <Head>
        <title>{t.title}</title>
      </Head>

      <main>
        <TypographyGB variant="h1" component="h1" bold sx={{ my: '30px' }}>
          {t.h1}
        </TypographyGB>
        <TypographyGB>{t.description}</TypographyGB>

        <TypographyGB variant="h2" component="h2" bold>
          {t.status}
        </TypographyGB>
        <TypographyGB>{t.requirements}</TypographyGB>
        <TypographyGB>{t.extServices}</TypographyGB>
        <TypographyGB component="h2" variant="h2" bold>
          {t.twitterEmbedded}
        </TypographyGB>
        <TypographyGB>{t.twitterEmbeddedDesc}</TypographyGB>

        <TypographyGB component="h2" variant="h2" bold>
          {t.noticeFlaw}
        </TypographyGB>
        <TypographyGB>{t.reportToUs}</TypographyGB>
        <TypographyGB bold>{t.onlineForm}</TypographyGB>
        <TypographyGB>
          <Link
            href={`https://opaskartta.turku.fi/eFeedback/${locale}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.reportViaForm}
          </Link>
        </TypographyGB>
        <TypographyGB bold>{t.email}</TypographyGB>
        <TypographyGB>
          <Link href="mailto:turkusovellus@turku.fi">turkusovellus@turku.fi</Link>
        </TypographyGB>
        <TypographyGB component="h2" variant="h2" bold>
          {t.authority}
        </TypographyGB>
        <TypographyGB>{t.beforeAuthority}</TypographyGB>

        <TypographyGB compoenent="h3" variant="h3" bold>
          {t.authorityContact}
        </TypographyGB>

        <TypographyGB>{t.accessibilityUnit}</TypographyGB>
        <TypographyGB>
          <Link
            href="https://www.saavutettavuusvaatimukset.fi"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.saavutettavuusvaatimukset.fi
          </Link>
        </TypographyGB>
        <TypographyGB>
          <Link href="mailto:saavutettavuus@avi.fi">saavutettavuus(at)avi.fi</Link>
        </TypographyGB>
        <TypographyGB>{t.phoneNumber} 0295 016 000</TypographyGB>

        <TypographyGB component="h2" variant="h2" bold>
          {t.constantImproving}
        </TypographyGB>
        <TypographyGB bold>{t.mostRecentStatement}</TypographyGB>
        <TypographyGB>{mostRecentStatementDate}</TypographyGB>
        <TypographyGB bold>{t.committed}</TypographyGB>
        <TypographyGB>{t.plannedImprovement}</TypographyGB>
      </main>
    </Box>
  );
};

export default SaavutettavuusSeloste;
