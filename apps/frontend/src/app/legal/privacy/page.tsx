import LegalPageLayout from '@/components/LegalPageLayout';

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="POLITIQUE DE CONFIDENTIALITÉ">
       <p>Date d'entrée en vigueur : {new Date().toLocaleDateString('fr-FR')}</p>
       
       <h2 className="text-xl font-black text-black mt-8">1. COLLECTE DES DONNÉES</h2>
       <p>Nous collectons différentes informations lorsque vous utilisez le site Ayn Thor, visitez notre boutique, ou lors d'un achat. Les données incluent notamment vos nom, adresse e-mail, numéros de téléphone, adresse de livraison et adresse IP.</p>
       
       <h2 className="text-xl font-black text-black mt-8">2. UTILISATION DES DONNÉES</h2>
       <p>Vos informations sont utilisées pour traiter vos commandes, vous fournir nos services d'expédition, améliorer votre expérience sur notre site en personnalisant nos produits, et nous protéger contre la fraude. Nous ne les utiliserons que conformément au cadre légal applicable.</p>

       <h2 className="text-xl font-black text-black mt-8">3. SÉCURITÉ DES TRANSACTIONS</h2>
       <p>Le paiement est géré par des plateformes certifiées et sécurisées. Vos informations bancaires (numéros de carte) ne sont jamais transmises à nos serveurs mais entièrement chiffrées par Stripe. C'est l'un de nos principes fondamentaux.</p>

       <h2 className="text-xl font-black text-black mt-8">4. COOKIES</h2>
       <p>Nous utilisons des cookies analytiques et fonctionnels pour suivre le nombre d'abandons paniers, adapter votre langue et accélérer la vitesse de chargement de la navigation sur notre site, mais sans abus. Vous pouvez les gérer depuis les paramètres de votre navigateur.</p>
       
       <br/>
       <p className="text-xs text-black/40">Cette page de politique de confidentialité est à titre indicatif pour le développement de la plateforme.</p>
    </LegalPageLayout>
  );
}
