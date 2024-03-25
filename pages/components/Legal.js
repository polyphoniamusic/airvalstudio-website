// Importing Dependencies //
import React from "react";
import Link from "next/link";

export function Legal() {;

  return (
    <section className="legal" id="legal">
        <div className="container">
            <div className="container-block">
              {/*<h1 className="section-title">Le studio</h1>*/}
                <div className="legal-block">
                  <h1 className="section-title">Conditions Générales de Vente</h1>

                  <h2 className="legal-title">1. Préambule</h2>
                  <p className="legal-text">Ces conditions générales de vente (ci-après dénommées « CGV ») forment un contrat légal
                  entre Airval Studio et le client qui régissent l’ensemble des prestations de services fournies
                  par Diaphonie Studio, une entreprise spécialisée dans l’enregistrement, le mixage et le
                  mastering audio.</p>

                  <h2 className="legal-title">2. Services d’Enregistrement</h2>
                  <h3 className="legal-subtitle">2.1 Tarifs</h3>
                  <p className="legal-text">Le prix de base pour une session d’enregistrement au Airval studio est fixé à 410 euros la
                  journée. Airval Studio se réserve le droit de modifier ce tarif en fonction du type
                  d’enregistrement, du nombre d’instruments à enregistrer et de l’horaire de la session.</p>
                  
                  <h3 className="legal-subtitle">2.2 Réservations et annulations</h3>
                  <p className="legal-text">Le client doit respecter l’horaire de sa réservation. En cas de retard, le client sera facturé pour
                  la totalité des heures réservées. Les annulations doivent être effectuées au moins 48 heures
                  avant la session réservée. Si une annulation est effectuée moins de 48 heures avant la session
                  réservée, le client sera facturé pour la totalité des heures réservées.</p>
                  <p className="legal-text">En cas de non-présence du client à la session d’enregistrement sans annulation
                  préalable (no-show), le client sera facturé pour la totalité des heures réservées.</p>

                  <h3 className="legal-subtitle">2.3 Responsabilités du client</h3>
                  <p className="legal-text">Le client est responsable de l’état du matériel et des équipements de studio utilisés pendant la
                  session. En cas de dommage, le client devra payer le coût de la réparation ou du
                  remplacement de l’équipement endommagé. De plus, le client est tenu de respecter les
                  instructions du personnel du studio et de se conformer aux normes de sécurité en vigueur dans
                  le studio.</p>
                  <p className="legal-text">Le client est responsable de l’état du matériel et des équipements de studio utilisés
                  pendant la session. En cas de dommage, le client sera facturé pour le coût de la
                  réparation ou du remplacement de l’équipement endommagé.</p>

                  <h3 className="legal-subtitle">2.4 Droit de refus</h3>
                  <p className="legal-text">Airval Studio se réserve le droit de refuser l’accès à ses locaux à toute personne qui, selon son
                  jugement, pourrait perturber la session d’enregistrement.</p>

                  <h3 className="legal-subtitle">2.5 Durée de la Session</h3>
                  <p className="legal-text">Toute session qui dépasse la durée réservée sera facturée au tarif journalier en vigueur, sous
                  réserve de la disponibilité du studio. Un dépassement de temps entraîne automatiquement un
                  tarif basé sur une journée complète.</p>

                  <h3 className="legal-subtitle">2.6 Validations</h3>
                  <p className="legal-text">Une session d’enregistrement comprend non seulement l’enregistrement lui-même, mais aussi
                  les ajustements du matériel d’enregistrement, les travaux d’édition, l’écoute des projets pour
                  validation par l’artiste, etc. Une fois que les pistes ont été enregistrées et que les éditions
                  audio ont été validées par l’artiste, le projet est considéré comme prêt pour le mixage. C’est-à-
                  dire que la Mise à Plat du projet (MAP) une fois validée par le client est prête pour le mixage.
                  Le studio se réserve le droit de refuser tout retour à la phase de composition pour de l’édition
                  déjà validée.</p>

                  <h2 className="legal-title">3. Mixage</h2>
                  <h3 className="legal-subtitle">3.1 Acceptation des Projets</h3>
                  <p className="legal-text">Le client est responsable de l’obtention de tous les droits d’auteur nécessaires pour le matériel
                  fourni pour le mixage. Airval Studio se réserve le droit de refuser des projets qui ne sont pas prêts à être mixés. Cela
                  peut inclure des fichiers désorganisés, nécessitant des travaux d’édition, une mauvaise qualité
                  audio, du contenu inapproprié, ou une production nécessitant des améliorations.</p>

                  <h3 className="legal-subtitle">3.2 Fichiers Finaux</h3>
                  <p className="legal-text">Le client doit s’assurer que les fichiers fournis sont les versions finales de sa composition,
                  sont complets et correctement nommés. Le studio n’acceptera pas l’ajout de nouveaux
                  éléments une fois que le mixage a commencé.</p>


                  <h3 className="legal-subtitle">3.3 Facturation des Exports</h3>
                  <p className="legal-text">Le studio facture à partir de 75€ pour les exports de projet édités en pistes séparées, en raison
                  du temps nécessaire pour effectuer ces exports.</p>


                  <h3 className="legal-subtitle">3.4 Validation du Mixage</h3>
                  <p className="legal-text">Le client doit approuver le mixage avant de passer à l’étape du mastering. Une fois le mixage
                  validé, le studio peut refuser toute modification ultérieure.</p>

                  <h3 className="legal-subtitle">3.5 Les corrections</h3>
                  <p className="legal-text">Au-delà deux corrections, Diaphonie Studio se réserve le droit de facturer à l’heure. A
                  compter de 50€ de l’heure.</p>

                  <h2 className="legal-title">4. Mastering</h2>
                  <h3 className="legal-subtitle">4.1 Préparation du Mastering</h3>
                  <p className="legal-text">Le client doit fournir des fichiers pour le mastering qui sont bien mixés et prêts à être
                  masterisés. Le client est responsable de l’obtention de tous les droits nécessaires pour le
                  matériel fourni pour le mastering.</p>

                  <h3 className="legal-subtitle">4.2 Modifications après le Mastering</h3>
                  <p className="legal-text">Une fois que le mastering a été effectué, le client aura l’opportunité de demander des
                  modifications mineures. Toute demande de modification ou de remastering complet peut
                  entraîner des frais supplémentaires.</p>

                  <h3 className="legal-subtitle">4.3 Livraison du Projet Masterisé</h3>
                  <p className="legal-text">Le projet masterisé sera livré au client dans le format convenu à l’avance. Le client devra
                  vérifier et approuver le projet masterisé avant la livraison finale.</p>

                  <h3 className="legal-subtitle">4.4 Tarifs</h3>
                  <p className="legal-text">Les tarifs pour le service de mastering sont indiqués sur notre site web ou seront
                  communiqués au client avant le début du service. Le paiement pour le service de mastering
                  est exigé à la fin de la session de mastering, sauf accord contraire.</p>

                  <h3 className="legal-subtitle">4.5 Réservation et Annulation</h3>
                  <p className="legal-text">Le client doit réserver une session de mastering à l’avance. Toute annulation doit être
                  effectuée au moins 48 heures avant la session réservée. Si une annulation est effectuée moins
                  de 48 heures avant la session réservée, le client sera facturé pour la totalité de la session.</p>

                  <h2 className="legal-title">5. Règlement</h2>
                  <h3 className="legal-subtitle">5.1 Modes de Paiement</h3>
                  <p className="legal-text">Le paiement pour les sessions d’enregistrement se fait à chaque session. Tous les paiements
                  doivent être effectués en euros. Nous acceptons les paiements en espèces et par virement.</p>

                  <h3 className="legal-subtitle">5.2 Acomptes</h3>
                  <p className="legal-text">Pour les nouveaux clients, Airval Studio se réserve le droit de demander un acompte avant le
                  début de la session d’enregistrement. Des acomptes peuvent également être demandés pour
                  les services de mixage et de mastering.</p>

                  <h3 className="legal-subtitle">5.3 Retard de Paiement</h3>
                  <p className="legal-text">En cas de retard de paiement, Airval Studio se réserve le droit de suspendre les services
                  jusqu’à réception du paiement intégral. En cas de rejets de paiement, Airval Studio se réserve
                  le droit de suspendre les services et d’appliquer des frais supplémentaires jusqu’à réception du
                  paiement intégral.</p>

                  <h2 className="legal-title">6. Modifications des Conditions et Tarifs</h2>
                  <p className="legal-text">Airval Studio se réserve le droit de modifier les conditions de réservation et les tarifs à tout
                  moment, avec un préavis de 2 jours. Les modifications seront communiquées au client à
                  l’avance et ne s’appliqueront pas aux réservations déjà confirmées.</p>

                  <h3 className="legal-title">7. Protection des Données Personnelles</h3>
                  <p className="legal-text">En conformité avec le Règlement Général sur la Protection des Données (RGPD), Airval
                  Studio s’engage à protéger et respecter la confidentialité des informations personnelles de ses
                  clients.</p>

                  <h3 className="legal-title">8. Résolution des Litiges</h3>
                  <p className="legal-text">Tout litige ou désaccord relatif à ces CGV sera résolu par la médiation ou l’arbitrage, selon ce
                  qui est déterminé par Airval Studio.</p>

                  <h3 className="legal-title">9. Loi Applicable</h3>
                  <p className="legal-text">Ces CGV sont régies par et interprétées conformément à la loi française.</p>

                  <h2 className="legal-title">10. Propriété Intellectuelle</h2>
                  <h3 className="legal-subtitle">10.1 Droits d’auteur</h3>
                  <p className="legal-text">Sauf indication contraire, Airval Studio ne revendique aucun droit d’auteur sur les
                  enregistrements, mixages et masters réalisés par le client au sein de nos studios. Les œuvres
                  créées restent la propriété du client. (sauf accord préalablement convenue avec le client).</p>

                  <h3 className="legal-subtitle">10.2 Utilisation des travaux</h3>
                  <p className="legal-text">Airval Studio se réserve le droit d’utiliser les enregistrements, mixages, masters et visuel de
                  l’artiste pour des fins de promotion et de marketing, sous réserve de l’obtention du
                  consentement préalable du client.</p>

                  <h2 className="legal-title">11. Limitation de responsabilité</h2>
                  <p className="legal-text">Airval Studio ne peut être tenu responsable de toute perte ou dommage résultant de la non-
                  disponibilité du studio, des équipements ou des services, sauf en cas de négligence ou de faute
                  intentionnelle de la part de Airval Studio.</p>

                  <h2 className="legal-title">12. Force Majeure</h2>
                  <p className="legal-text">Airval Studio ne peut être tenu responsable de tout manquement à ses obligations en vertu de
                  ces CGV si ce manquement est causé par des événements indépendants de sa volonté, tels que
                  des catastrophes naturelles, des grèves, des émeutes, des guerres, des actes de terrorisme, des
                  incendies, des inondations, des pannes d’électricité ou des pannes d’Internet.</p>

                  <h2 className="legal-title">13. Indemnisation</h2>
                  <p className="legal-text">Le client s’engage à indemniser et à dégager de toute responsabilité Airval Studio, ses
                  dirigeants, employés, agents, sous-traitants et partenaires pour tout dommage, perte, coût,
                  dépense, responsabilité ou réclamation, y compris les frais juridiques raisonnables, résultant
                  d’une violation des présentes CGV par le client.</p>

                  <h2 className="legal-title">14. Intégralité de l’accord</h2>
                  <p className="legal-text">Ces CGV, ainsi que tout autre document auquel il est fait référence, constituent l’intégralité de
                  l’accord entre Airval Studio et le client concernant l’objet des présentes.</p>

                  <h2 className="legal-subtitle">15. Renonciation</h2>
                  <p className="legal-text">Aucun manquement ou retard de Airval Studio à exercer un droit ou un recours en vertu des
                  présentes CGV ne constituera une renonciation à ce droit ou recours, sauf si cette renonciation
                  est expressément acceptée par écrit.</p>

                  <h2 className="legal-subtitle">16. Nullité partielle</h2>
                  <p className="legal-text">Si une disposition de ces CGV est jugée invalide ou inapplicable par un tribunal compétent,
                  les autres dispositions resteront en vigueur.</p>

                  <h2 className="legal-subtitle">17. Notifications</h2>
                  <p className="legal-text">Toutes les notifications, requêtes, demandes et autres communications en vertu de ces CGV
                  doivent être effectuées par écrit et seront considérées comme ayant été dûment données
                  lorsqu’elles auront été reçues par Airval Studio à l’adresse indiquée dans ces CGV.</p>

                  <h2 className="legal-title">18. Transfert des droits et obligations</h2>
                  <p className="legal-text">Le client ne peut céder, transférer, déléguer ou sous-traiter aucun de ses droits ou obligations
                  en vertu des présentes CGV sans le consentement préalable écrit de Airval Studio.</p>

                  <h2 className="legal-title">19. Survie des obligations</h2>
                  <p className="legal-text">Toutes les dispositions des présentes CGV qui, par leur nature, devraient survivre à la
                  résiliation, survivront à la résiliation, y compris, sans limitation, les obligations de paiement,
                  les garanties données, les indemnités et les limitations de responsabilité.</p>

                </div>
            </div>
        </div>
    </section>
  );
}

export default Legal;