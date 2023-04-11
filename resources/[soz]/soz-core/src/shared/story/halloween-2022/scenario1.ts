import { Story } from '../story';

export const Halloween2022Scenario1: Story = {
    name: 'Le mystérieu meurtre',
    dialog: {
        part1: {
            audio: 'audio/halloween-2022/scenario1/part1.mp3',
            text: [
                'Au secours, aidez-nous !... Oh, quelqu’un ! S’il vous plaît, faites quelque chose !',
                'On se baladait avec mon compagnon sur la plage,',
                'quand tout un coup, une silhouette s’est jetée sur nous !',
                'Elle l’a poignardé 42 fois ! Je ne sais pas quoi faire…',
                'Cette chose est partie vers les poubelles du bâtiment en face de nous !',
            ],
        },
        part2: {
            audio: 'audio/halloween-2022/scenario1/part2.mp3',
            text: [
                'Vous avez trouvé un couteau ensanglanté ? Oh mais c’est affreux…',
                'Que vais-je faire, mon pauvre compagnon… ',
                "S'il vous plait, essayez de retrouver notre agresseur !",
                "Observez bien le couteau, un indice devrait vous aider afin de savoir d'où il provient.",
                'De mon côté, je vais appeler les services de police, merci beaucoup de votre assistance !',
            ],
        },
        part3: {
            audio: 'audio/halloween-2022/scenario1/part3.mp3',
            text: [
                'Toi ! Où est-ce que tu as trouvé ce couteau ?!',
                'Je pensais pourtant l’avoir bien caché..',
                'Boarf, ce n’est pas comme si je risquais quelque chose…',
                'Va me trouver un cercueil, si tu veux pas que je te plante toi aussi !',
            ],
        },
        part4: {
            audio: 'audio/halloween-2022/scenario1/part4.mp3',
            text: [
                'Tu te fous de ma gueule ? Un cercueil miniature ?!',
                'Casse-toi avant que je ne perde patience.',
                "Et n'essaie pas d’en parler au commissariat le plus proche !",
                'Je ne risque absolument rien dans cette ville.',
            ],
        },
        part5: {
            audio: 'audio/halloween-2022/scenario1/part5.mp3',
            text: [
                'Oh mon capitaine…. Oh ! Je ne vous avais pas remarqué. Que me racontez-vous ?',
                'Un crime a eu lieu sur la plage ?',
                'J’en suis bien navré, mais je ne peux pas vous aider pour le moment…',
                'Mon capitaine m’a demandé de trouver de la nourriture pour notre Iench…',
                'Tiens, aller chercher sa nourriture dans sa niche à Stab City,',
                'et je pourrais vous aider à résoudre cette affaire !',
            ],
        },
        part6: {
            audio: 'audio/halloween-2022/scenario1/part6.mp3',
            text: [
                'Oooooh, ma nourriture pour Iench ! Merci beaucoup ! Mon capitaine va être content.',
                'Je vous avais promis de vous aider, mais moi aussi j’ai faim maintenant…',
                'Allez me chercher une Soupe à la citrouille chez Château Marius,',
                'et je vous promet qu’ensuite je vous aiderai !',
            ],
        },
        part7: {
            audio: 'audio/halloween-2022/scenario1/part7.mp3',
            text: [
                'Une bonne soupe à la citrouille ! Merci beaucoup.',
                'Ne vous inquiétez pas, l’élite du LSPD va vous aider et nous mettrons ce bandit en cellule.',
                'Tenez ceci pour vous remercier de votre coopération.',
            ],
        },
    },
    zones: [
        {
            name: 'trash1',
            part: 1,
            label: 'Chercher',
            icon: 'fas fa-search',
            center: [-1674.71, -1010.77, 7.38],
            length: 1,
            width: 2,
            heading: 293,
            minZ: 3.58,
            maxZ: 7.58,
        },
        {
            name: 'trash2',
            part: 1,
            label: 'Chercher',
            icon: 'fas fa-search',
            center: [-1687.82, -1001.29, 7.39],
            length: 2,
            width: 1,
            heading: 320,
            minZ: 3.79,
            maxZ: 7.79,
        },
        {
            name: 'trash3',
            part: 1,
            label: 'Chercher',
            icon: 'fas fa-search',
            center: [-1674.97, -992.8, 7.38],
            length: 1,
            width: 2,
            heading: 320,
            minZ: 4.18,
            maxZ: 8.18,
        },
        {
            name: 'trash4',
            part: 1,
            label: 'Chercher',
            icon: 'fas fa-search',
            center: [-1666.59, -999.77, 7.39],
            length: 1,
            width: 2,
            heading: 320,
            minZ: 4.39,
            maxZ: 8.39,
        },
        {
            name: 'doghouse',
            part: 5,
            label: 'Chercher',
            icon: 'fas fa-search',
            center: [43.25, 3740.21, 39.56],
            length: 1.2,
            width: 1.4,
            heading: 11,
            minZ: 36.16,
            maxZ: 40.16,
        },
    ],
    props: [
        { model: 'p_bloodsplat_s', coords: [-1646.25757, -1064.36438, 2.6638186], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1647.35852, -1063.73352, 2.64695525], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1645.56287, -1065.12939, 2.6638186], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1648.121, -1062.38074, 2.66395855], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1647.05994, -1062.966, 2.67473316], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1648.14258, -1060.35327, 2.73919225], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1651.67261, -1052.12891, 3.274258], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1657.9292, -1044.782, 3.634825], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1659.82935, -1035.595, 4.06299], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1664.64844, -1024.19043, 4.814108], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1664.58313, -1015.53925, 5.845688], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1669.036, -1014.68164, 6.389642], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1674.94, -1010.77234, 6.38943672], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1681.92737, -1005.78162, 6.38943958], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1688.15674, -1002.40308, 6.38970375], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1695.74109, -1004.34619, 5.947353], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1703.8894, -1005.40729, 5.49293756], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1706.9325, -997.9151, 5.27463055], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1712.2428, -1007.50745, 4.825735], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1719.37512, -1015.68396, 4.282266], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1721.3269, -1012.11725, 4.25680876], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1675.69714, -1006.41467, 6.389439], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1670.80945, -1002.8764, 6.389439], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1666.76184, -1002.06677, 6.42044], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1670.2074, -997.432, 6.42044], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1673.96985, -993.7691, 6.420377], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1675.687, -989.1524, 6.42038059], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1673.25647, -983.6904, 6.42038059], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1668.5083, -979.465454, 6.378703], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1671.886, -1005.33789, 6.389439], rotation: [-90, 0, 0] },
        { model: 'p_bloodsplat_s', coords: [-1670.94226, -1007.039, 7.41958427], rotation: [-90, 0, 0] },
    ],
};