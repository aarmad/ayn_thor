import LegalPageLayout from '@/components/LegalPageLayout';

export default function TermsPage() {
  return (
    <LegalPageLayout title="CONDITIONS D'UTILISATION">
       <p>Date d'entrée en vigueur : {new Date().toLocaleDateString('fr-FR')}</p>
       
       <h2 className="text-xl font-black text-black mt-8">1. ACCEPTATION DES CONDITIONS</h2>
       <p>En accédant et utilisant ce site internet et le compte client associé, vous acceptez d'être lié par nos présentes Conditions d'Utilisation. La visite du site vaut comme un accord légal.</p>
       
       <h2 className="text-xl font-black text-black mt-8">2. PROPRIÉTÉ INTELLECTUELLE</h2>
       <p>Tous les contenus inclus sur ce site, y compris les textes, graphiques, logos, codes, logiciels et design visuel de la plateforme AYN THOR sont la propriété de l'entreprise et protégés par les lois des droits d'auteur internationales.</p>

       <h2 className="text-xl font-black text-black mt-8">3. MODIFICATION DE SERVICES ET DE PRIX</h2>
       <p>Le prix et les spécifications de nos articles (notamment la série de consoles Android Ayn Thor Lite, Base, Pro, Max) sont sujets à changement sans préavis. Nous nous réservons le droit de modifier le contenu de l'offre et les tarifs régis par nos partenaires et constructeurs.</p>

       <h2 className="text-xl font-black text-black mt-8">4. UTILISATION AUTORISÉE</h2>
       <p>Le site ne doit être utilisé que dans le respect total des lois applicables. Vous ne devez transmettre aucun virus, fichier malveillant, fausse identité ou carte de paiement altérée sous peine de bannissement de l'IP du visiteur.</p>
       
       <br/>
       <p className="text-xs text-black/40">Cette page de conditions d'utilisation est à titre indicatif pour le développement de la plateforme.</p>
    </LegalPageLayout>
  );
}
