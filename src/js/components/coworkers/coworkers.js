((app) => {
    'use strict'
    app.component("coworkers", {
        bindings: {
            editMode: "<",
            ngModel: "="
        },
        templateUrl: 'js/components/coworkers/coworkers.html',

            controller: function($location, $anchorScroll) {
            angular.extend(this, {
                page: {
                    name: 'coworkers',
                    content: ''
                }
            })
            this.gotofirstPart = function() {
                $location.hash('firstPart')
                $anchorScroll()
            }
          this.coworkers = [
              {
                "company": "Apperture" ,
                "slogan" : "Innnovation 3D interactive",
                "resume" : "Apperture est spécialisée dans le développement de contenu 3D interactif en temps réel de haute qualité, notamment dans le domaine de la réalité virtuelle, réalité augmentée, applications desktop et mobiles.</br> Nous accompagnons les entreprises dans la conception et le déploiement de solutions 3D interactives pouvant impacter toutes les étapes de la vie d’un produit : design de prototype, simulation et visualisation de données 3D, formation des collaborateurs, mais également pour l’évènementiel et le support à la vente.</br> Si vous souhaitez offrir un autre regard sur vos projets, dépasser les limites visuelles de notre monde ou immerger vos partenaires et clients dans une nouvelle expérience émotionnelle marquante, nous avons sûrement une solution.",
                "image" : "visu-Apperture.png",
                "urllink" : "http://www.apperture.fr/"
              },{
                "company": "3Prime" ,
                "slogan" : "Votre agence digitale santé",
                "resume" : "Depuis 10 ans à l’interface de l’univers médical et des nouvelles technologies, les équipes pluridisciplinaires de 3Prime conçoivent et développent des outils digitaux interactifs et \"expérientiels\" au profit de la promotion des produits de santé, de la formation des professionnels de santé et de l’éducation thérapeutique des patients. Nous combinons nos connaissances médicales à une expertise technique pour proposer un large éventail de projets : 3D temps réel, Réalité virtuelle, Réalité augmentée, Applications, simulation médicale, film d’animation. ",
                "image" : "visu-3Prime.png",
                "urllink" : "https://www.troisprime.com/"
              },{
                "company": "Wild Code School" ,
                "slogan" : "Apprends à code sans chaussures",
                "resume" : "La Wild Code School est une école nouvelle génération dont l’objectif est de combler le défaut de compétences numériques en formant des développeurs à portée des entreprises en quête de talents. Nous espérons devenir leader de la pédagogie hybride (blended learning) en pilotant un réseau d’écoles innovantes en France et à l’étranger. Les élèves de la Wild Code School forment une communauté soudée qui s’appuie sur l’entraide et le soutien mutuel. La joie de vivre et la passion font partie de notre quotidien. Une fois les cinq mois de formation validés, la Wild Code School permet d’obtenir le titre d’Etat « développeur logiciel » (équivalent bac+2), après avoir fait une expérience en milieu professionnel de 2 à 4 mois.",
                "image" : "/img/logos/visu-AEC.png",
                "urllink" : "http://www.wildcodeschool.fr/"
              },{
                "company": "Lourse" ,
                "slogan" : "Studio de communication",
                "resume" : "Depuis 10 ans à l’interface de l’univers médical et des nouvelles technologies, les équipes pluridisciplinaires de 3Prime conçoivent et développent des outils digitaux interactifs et \"expérientiels\" au profit de la promotion des produits de santé, de la formation des professionnels de santé et de l’éducation thérapeutique des patients. Nous combinons nos connaissances médicales à une expertise technique pour proposer un large éventail de projets : 3D temps réel, Réalité virtuelle, Réalité augmentée, Applications, simulation médicale, film d’animation. ",
                "image" : "/img/logos/visu-Lourse.png",
                "urllink" : "http://www.lourse-communication.com/"
              },{
                "company": "HORIZONS immobilier" ,
                "slogan" : "Transaction immobilière et administration de biens",
                "resume" : "Créé en 1993 à Capbreton par Christian LEROSIER, le groupe HORIZONS IMMOBILIER est aujourd’hui présent sur Biarritz, Bayonne, Ondres, Labenne, Capbreton, St Vincent de Tyrosse et maintenant sur Bordeaux avec l’installation en septembre 2016 d’un bureau administratif au sein de l’espace Atelier Canteloup.</br> Notre expérience et nos compétences en matière de transaction immobilière et d’administration de biens, nos conseils professionnels constituent le ciment d’une relation unique et durable avec nos clients et ce depuis plus de 20 ans.</br> Nous intervenons aujourd’hui sur l’ensemble des services immobiliers : Gestion, Syndic, Transaction, Neuf et Défiscalisation.</br> Notre cabinet est membre de la FNAIM (Fédération Nationale des Agents Immobiliers) qui donne à notre métier les garanties indispensables à la sécurité des clients : Garantie Financière, Assurance Responsabilité Civile, Déontologie.",
                "image" : "/img/logos/visu-horizon.png",
                "urllink" : "http://www.horizons-immobilier.com/"
              },{
                "company": "DEVISUBOX" ,
                "slogan" : "Haute technologie numérique",
                "resume" : "Devisubox, entreprise de haute technologie numérique, a industrialisé un service B to B de monitoring et de promotion audiovisuelle en temps réel. Avec un produit utilisé par plus de 75% des acteurs du CAC40 pour du suivi de construction, Devisubox connait une très forte croissance sur près de 500 chantiers en France et des débuts très prometteurs à l'export, avec la création d'une première filiale au Canada. Présente à Bordeaux depuis le début de l’année 2016 et suivant déjà plusieurs projets emblématiques du renouvellement urbain et économique de la métropole bordelaise (Bordeaux Euratlantique, Bassins à Flot, nouveau Campus Thalès à Mérignac), c’est à l’Atelier Canteloup que Devisubox a décidé d’installer son bureau de développement pour le sud-ouest.",
                "image" : "/img/logos/visu-devisubox.png",
                "urllink" : "http://www.devisubox.com/fr/"
              },{
                "company": "AEC" ,
                "slogan" : "Audit Expertise Conseil",
                "resume" : "AEC est une société coopérative d’intérêt collectif (SCIC) dédiée aux collectivités, proposant une expertise indépendante et pluridisciplinaire sur l’énergie. AEC rassemble 11 consultants financiers, techniques et économiques, mettant à contribution leur grande expertise pour la recherche de l'intérêt général dans la gestion et l’amélioration des services publics locaux d’énergie. Référence depuis plus de 20 ans sur l'audit et le contrôle des concessions de distribution d'énergie (électricité, gaz, chaleur et froid), AEC a développé une compétence reconnue auprès des collectivités confrontées aux enjeux de la transition énergétique. AEC assiste de nombreux acteurs publics dans la définition de leur stratégie énergétique : planification des politiques énergétiques locales (production, maitrise de la demande, rénovation thermique), optimisation technico-économique de la distribution d’énergie ; identification d’opportunités offertes par les réseaux intelligents ; articulation des sujets énergétiques et des documents de planification urbaine. L’expertise d’AEC s’exerce également dans la recherche d’opportunités d'économie et de réduction des dépenses au travers notamment de l’optimisation des achats d'énergie par les acteurs publics et la mise en place de solutions numériques de gestion des énergies et de leur patrimoine.",
                "image" : "/img/logos/visu-AEC.png",
                "urllink" : "http://www.aeconseil.fr/"
              }
            ]
        }
    })
})(angular.module('app.coworkers'))
