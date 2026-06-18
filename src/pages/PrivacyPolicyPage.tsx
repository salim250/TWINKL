import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

const lastUpdated = '15 juin 2026';

const sections = [
  {
    title: '1. Responsable et contact',
    body: [
      'Cette politique de confidentialite concerne l application mobile et le site web TWINKL Education, appId com.twinkl.edu, exploites par TWINKL Education.',
      'Pour toute question relative a la confidentialite, a l acces aux donnees ou a la suppression des donnees, contactez-nous a teducm@gmail.com.',
    ],
  },
  {
    title: '2. Donnees que nous collectons',
    body: [
      'Donnees fournies dans les formulaires d inscription: nom complet de l eleve, date de naissance, genre, nationalite, nom et numero de telephone du parent, programme choisi, matieres d interet, horaire prefere, signature parentale et date.',
      'Donnees fournies dans les candidatures: nom complet, adresse e-mail, numero de telephone, poste demande, specialisation, experience, CV et lettre de motivation ou certificats lorsque vous les joignez.',
      'Donnees de compte pour les utilisateurs autorises: adresse e-mail, mot de passe traite par Supabase Auth, identifiant utilisateur et informations de session necessaires a la connexion.',
      'Donnees pedagogiques: titre de lecon, classe, date, heure de debut, heure de fin, documents de cours joints et nom des fichiers.',
      'Donnees techniques: l application utilise l acces Internet pour charger le contenu, envoyer les formulaires, gerer la connexion et afficher les ressources. Les journaux techniques de nos prestataires peuvent inclure des donnees comme l adresse IP, le type d appareil, le navigateur, la date et l heure d utilisation.',
    ],
  },
  {
    title: '3. Permissions Android et fichiers',
    body: [
      'L application peut demander l acces aux medias ou fichiers de l appareil uniquement lorsque vous choisissez de joindre ou televerser un document ou une ressource de cours. Nous n utilisons pas ces permissions pour lire vos fichiers sans action de votre part.',
      'L application ne demande pas l acces a la localisation precise, aux contacts, au microphone, aux appels, aux SMS ou a la camera.',
    ],
  },
  {
    title: '4. Utilisation des donnees',
    body: [
      'Nous utilisons les donnees pour traiter les demandes d inscription, repondre aux candidatures, gerer les comptes autorises, publier et administrer les emplois du temps, fournir les documents pedagogiques, assurer la securite du service et communiquer avec les parents, eleves ou candidats.',
      'Nous n utilisons pas les donnees personnelles et sensibles pour vendre des profils, faire de la publicite comportementale ou prendre des decisions automatisees produisant des effets juridiques.',
    ],
  },
  {
    title: '5. Partage des donnees',
    body: [
      'Nous pouvons partager les donnees avec des prestataires techniques strictement necessaires au fonctionnement du service, notamment Supabase pour l authentification, la base de donnees et le stockage, notre service d envoi de formulaires par e-mail, Google Forms si vous utilisez le formulaire externe d inscription, Google Maps pour l affichage de la carte et les services d hebergement du site.',
      'Nous pouvons aussi divulguer des donnees si la loi l exige, pour proteger nos droits, prevenir une fraude ou repondre a une demande legale valide.',
      'Nous ne vendons pas les donnees personnelles et sensibles des utilisateurs.',
    ],
  },
  {
    title: '6. Securite',
    body: [
      'Nous appliquons des mesures raisonnables pour proteger les donnees, notamment la transmission via HTTPS lorsque les donnees sont envoyees vers nos services et l utilisation de prestataires proposant des mecanismes de controle d acces.',
      'Aucun systeme n est totalement exempt de risque. Nous limitons donc l acces aux donnees aux personnes et prestataires qui en ont besoin pour fournir le service.',
    ],
  },
  {
    title: '7. Conservation et suppression',
    body: [
      'Les donnees de formulaires sont conservees le temps necessaire pour traiter la demande, assurer le suivi administratif et respecter nos obligations legales ou de securite.',
      'Les comptes, emplois du temps et ressources pedagogiques sont conserves tant qu ils sont necessaires au service ou jusqu a leur suppression par un utilisateur autorise ou par TWINKL Education.',
      'Vous pouvez demander l acces, la correction ou la suppression de vos donnees en nous contactant a teducm@gmail.com. Nous traiterons la demande dans un delai raisonnable, sous reserve des obligations legales de conservation.',
    ],
  },
  {
    title: '8. Enfants et eleves mineurs',
    body: [
      'TWINKL Education s adresse a des familles, parents, eleves et candidats. Lorsque des informations concernent un eleve mineur, elles doivent etre fournies par un parent, tuteur legal ou utilisateur autorise.',
      'Nous ne collectons pas sciemment de donnees d enfants a des fins publicitaires et nous ne vendons pas les donnees d enfants. Si vous pensez qu un enfant nous a transmis des donnees sans autorisation parentale, contactez-nous pour demander leur suppression.',
    ],
  },
  {
    title: '9. Services tiers',
    body: [
      'Certains services tiers appliquent leurs propres politiques de confidentialite. Lorsque vous utilisez Google Forms, Google Maps, Supabase ou un service externe accessible depuis l application, leur traitement des donnees peut etre soumis a leurs conditions et politiques.',
    ],
  },
  {
    title: '10. Modifications',
    body: [
      'Nous pouvons mettre a jour cette politique pour refleter les changements de l application, de nos prestataires ou des exigences legales. La date de derniere mise a jour sera modifiee sur cette page.',
    ],
  },
];

export const PrivacyPolicyPage = () => {
  return (
    <div className="pt-20 bg-white">
      <section className="bg-primary text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck className="w-10 h-10 text-secondary" />
            <span className="text-sm uppercase tracking-wider font-semibold text-white/80">
              TWINKL Education
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-heading mb-4">
            Politique de confidentialite
          </h1>
          <p className="text-lg md:text-xl text-white/85 font-body max-w-3xl leading-relaxed">
            Cette page explique comment l application mobile TWINKL Education collecte,
            utilise, partage, securise, conserve et supprime les donnees des utilisateurs.
          </p>
          <p className="mt-5 text-white/75 font-body">Derniere mise a jour: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 rounded-lg border border-gray-200 bg-background-light p-6">
            <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
              Coordonnees
            </h2>
            <div className="space-y-3 font-body text-text-muted">
              <p className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Contact confidentialite: teducm@gmail.com</span>
              </p>
              <p className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Telephone: +216 28 557 779 / +216 20 222 226</span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Adresse: Rue Fadhel Ben Achour, Ariana 1004, Tunisie</span>
              </p>
            </div>
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="font-body text-text-muted leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
