'use client';

import Image from 'next/image';
import AnimatedBox from '@/components/shared/AnimatedBox'; // Réutilisation de l'animation existante
import { motion } from 'framer-motion';

// Fonction pour détecter si le texte contient des caractères arabes
const isArabic = (text) => /[\u0600-\u06FF]/.test(text);

const ateliers = [
    {
        title: 'Atelier Scratch "Histoire Animée"',
        description:
            'Un atelier interactif pour apprendre les bases de la programmation avec Scratch. Idéal pour les débutants et les jeunes apprenants.',
        images: [
            '/assets/atelier/scratch1.png', // Remplacez par vos images
        ],
    },
    {
        title: 'Atelier Programmation "Single Page Applications (SPA)"',
        description:
            'دعوة لطلبة المعهد العالي للدراسات التكنولوجية بجندوبة المشاركين في هذه الورشة ! \n' +
            'هل ترغب في تعلم كيفية استخدام رياكت لإنشاء تطبيقات ويب تفاعلية؟ \n' +
            'لا تفوّت هذه الورشة المميزة حول تصميم برتفوليو تفاعلي! \n' +
            'المكان: المعهد العالي للدراسات التكنولوجية بجندوبة \n' +
            'التاريخ: 19 فيفري 2025 \n' +
            'المدرب: بلال المحجوبي \n',
        images: [
            '/assets/atelier/web1.png', // Remplacez par vos images
        ],
    },
    {
        title: 'التقنيات الحديثة في التعليم',
        description:
            'الملتقى الوطني للبرمجة و الروبوتيك بالشراكة مع وزارة التربية تحت إشراف المندوبية الجهوية للتربية \n' +
            'تنظيم دورات تكوينية في استعمال التكنولوجيات الحديثة في التعليم لإطار التدريس ابتدائي و ثانوي \n' +
            'المكان: شارع الهادي شاكر عمارة السلامي-الطابق الأول \n' +
            'التاريخ: 26 ديسمبر 2024 \n' +
            'المدرب: بلال المحجوبي \n',
        images: [
            '/assets/atelier/tech.png', // Remplacez par vos images
        ],
    },
    {
        title: 'حفل اختتام السنة الدراسية 2023 -2024',
        description:
            'اختتتام الدورة التكوينيةً لسنة 2023-2024  و افتتاح دورة جديدة تحت شعار « نحن نصنع المستقبل »و من بين أهداف هذه الدورة :\n' +
            'الملتقى الوطني للبرمجة و الروبوتيك بالشراكة مع وزارة التربية تحت إشراف المندوبية الجهوية للتربية \n' +
            'المشاركة في المسابقات الدولية و الوطنية \n' +
            'تنظيم دورات تكوينية في استعمال التكنولوجيات الحديثة في التعليم لإطار التدريس ابتدائي و ثانوي \n' +
            'تنظيم مسابقات و طنية و جهوية, اتفاقية شراكة مع جامعة جندوبة و العديد من الملتقيات و المشاريع المرتقبة\n' +
            'تنظيم رحلة تكوينية في عدة مجالات منها في الذكاء الاصطناعي للمنخرطين في الجمعية إلى الولايات المتحدة الأمريكية في اطار الشراكة مع جامعة كاليفورنيا \n' +
            'المكان: الفرع الجهوي للتكوين و تطوير الكفاءات بجندوبة \n' +
            'التاريخ: 16 سبتمبر 2024 \n' +
            'المدرب: بلال المحجوبي \n',
        images: [
            '/assets/atelier/scratch2.png', // Remplacez par vos images
        ],
    },
    {
        title: 'Atelier Scratch avancé "Création de jeux"',
        description:
            'تنظم الجمعية التونسية للبرمجة و الروبوتيك بمناسبة العطلة الصيفية نادي سكراتش مستوى متقدم ينطلق يوم الجمعة 02 أوت 2024 .  \n' +
            'تنطلق غدا الدورة التكوينية الخاصة ببرمجية السكراتش في مقر الجمعية ابتداء من الساعة العاشرة صباحا …. مرحبا بالجميع\n' +
            'لا تفوّت هذه الورشة المميزة حول تصميم ألعاب الفيديو ! \n' +
            'المكان: 95 نهج الهادي شاكر عمارة السلامي الطابق الاول جندوبة وراء البنك المركزي \n' +
            'التاريخ: 02 أوت 2024 \n' +
            'المدرب: بلال المحجوبي \n',
        images: [
            '/assets/atelier/scratch3.png', // Remplacez par vos images
        ],
    },
    {
        title: 'Atelier web "Développement Full Stack"',
        description:
            'un atelier pour apprendre à créer des sites web modernes et réactifs. Idéal pour les passionnés de technologie et de programmation web. \n' +
            'Html, Css, Javascript \n' +
            'Php ,mysql \n' +
            'Durée du formation : 16h \n' +
            '95 av Hedi Chaker  imm.Sellami premier étage jendouba 8100 \n' +
            'Les places sont limitées \n' +
            '22 décembre 2024 \n' +
            'Formateur : Mahjoubi Bilel\n',
        images: [
            '/assets/atelier/web4.png', // Remplacez par vos images
        ],
    },

];

export default function Atelier() {
    return (
        <section className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-accent text-center mb-8">
                Mes Ateliers
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ateliers.map((atelier, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl font-semibold text-center text-white mb-4">
                            {atelier.title}
                        </h2>
                        <div
                            className={`text-white/80 mb-4 ${isArabic(atelier.description) ? 'text-right' : 'text-left'
                                }`}
                            style={{
                                direction: isArabic(atelier.description) ? 'rtl' : 'ltr',
                            }}
                        >
                            {atelier.description.split('\n').map((line, lineIndex) => (
                                <p key={lineIndex} className="mb-2">
                                    {line}
                                </p>
                            ))}
                        </div>
                        <div
                            className={`grid ${atelier.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                                } gap-4`}
                        >
                            {atelier.images.map((image, imgIndex) => (
                                <AnimatedBox key={imgIndex}>
                                    <Image
                                        src={image}
                                        alt={`${atelier.title} image ${imgIndex + 1}`}
                                        width={500}
                                        height={350}
                                        className="rounded-lg"
                                    />
                                </AnimatedBox>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}