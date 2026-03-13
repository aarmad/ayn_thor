import LegalPageLayout from '@/components/LegalPageLayout';

export default function RefundPage() {
  return (
    <LegalPageLayout title="POLITIQUE DE REMBOURSEMENT">
       <p>Date d'entrée en vigueur : {new Date().toLocaleDateString('fr-FR')}</p>
       
       <h2 className="text-xl font-black text-black mt-8">1. CONDITIONS DE RETOURS</h2>
       <p>Nous appliquons une politique de retour à 30 jours, ce qui signifie que vous avez 30 jours après réception de votre article acheté chez AYN TEC pour demander un remboursement.</p>
       
       <h2 className="text-xl font-black text-black mt-8">2. CRITÈRES D'ÉLIGIBILITÉ</h2>
       <p>Pour être admissible à un retour, votre article doit être dans l'état où vous l'avez reçu, avec les étiquettes et dans son emballage d'origine. Vous aurez également besoin d'un reçu ou d'une preuve d'achat pour que notre système puisse certifier qu'il s'agit d'une expédition AYN THOR.</p>

       <h2 className="text-xl font-black text-black mt-8">3. REMBOURSEMENTS</h2>
       <p>Si la demande est approuvée, vous serez automatiquement remboursé sur votre mode de paiement original (Stripe autorise un traitement généralement sous 3 à 5 jours ouvrés). Veuillez noter qu'il faut parfois un certain temps à votre banque ou société de carte de crédit pour traiter et enregistrer l'avis de remboursement.</p>

       <br/>
       <p className="text-xs text-black/40">Cette page de politique de retour est à titre indicatif pour le développement de la plateforme.</p>
    </LegalPageLayout>
  );
}
