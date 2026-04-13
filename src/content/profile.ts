export type HighlightEntry = {
    date: string
    parts: (string | { text: string; href: string })[]
}

export const profile = {
    name: 'Timothy Chen',
    bio: "Hi, I'm Tim, a student and engineer. Let's connect! Reach me at ",
    contact: {
        email: 'timothy.chen5@alumnimail.pepperdine.edu',
        linkedin: 'https://www.linkedin.com/in/timochen',
        resume: '/Timothy Chen Resume.pdf',
    },
    highlights: [
        {
            date: '06/2025',
            parts: ['Returned to ', { text: 'Amazon', href: '' }, ' as a data engineer in the ', { text: 'Security Issue Management', href: '' }, ' organization'],
        },
        {
            date: '05/2025',
            parts: ['Graduated ', { text: 'Summa Cum Laude', href: '' }, ' (GPA: 3.992/4.000) — B.S. in Computer Science & Mathematics'],
        },
        {
            date: '12/2024',
            parts: ['Featured in Pepperdine\'s 2024 ', { text: 'IT Annual Review', href: 'https://issuu.com/pepperdine/docs/it_annual_review_2024/5?ff' }],
        },
        {
            date: '05/2024',
            parts: ['Joined ', { text: 'Amazon', href: '' }, ' as a data engineering intern on the ', { text: 'Alexa Enterprise', href: '' }, ' team in Seattle, WA'],
        },
        {
            date: '04/2024',
            parts: ['Awarded the ', { text: 'Edison Scholarship', href: '' }, ' by natural science faculty'],
        },
        {
            date: '01/2024',
            parts: ['Joined ', { text: 'ensa.ai', href: 'https://ensa.ai/' }, ' as a part-time MLE intern, building a video processing computer vision pipeline'],
        },
        {
            date: '12/2023',
            parts: [{ text: 'Paper', href: 'https://digitalcommons.pepperdine.edu/scursas/2024/posters/2/' }, ' on autonomous RC cars published with funding from the ', { text: 'AYURI grant', href: '' }],
        },
        {
            date: '08/2023',
            parts: ['Returned to Pepperdine\'s internal app development team. Owned development for ', { text: 'esign.pepperdine.edu', href: 'https://esign.pepperdine.edu/' }],
        },
        {
            date: '07/2023',
            parts: ['Awarded the ', { text: 'Northrop Grumman Endowed Scholarship', href: '' }, ' for excellence in engineering'],
        },
        {
            date: '07/2023',
            parts: [{ text: 'Article', href: 'https://seaver.pepperdine.edu/newsroom/articles/7-10-23-chen-isapa.htm' }, ' written about me by Pepperdine\'s official undergraduate newsletter'],
        },
        {
            date: '06/2023',
            parts: ['Oral presentation of research at ', { text: 'ISAPA \'23', href: '' }, ' held in Dunedin, New Zealand'],
        },
        {
            date: '05/2023',
            parts: ['Joined ', { text: 'Samsung', href: '' }, ' as a software engineer intern on the data intelligence team in Austin, TX'],
        },
        {
            date: '04/2023',
            parts: ['Paper on language processing for research publications'],
        },
        {
            date: '04/2023',
            parts: ['Placing in my first hackathon at the CTG Hackathon hosted by ', { text: 'Morgan Stanley', href: '' }],
        },
        {
            date: '12/2022',
            parts: [{ text: 'Paper', href: '/CV_Plant_Cell_Detection_compressed.pdf' }, ' on deep learning for ecology applications'],
        },
        {
            date: '11/2022',
            parts: [{ text: 'Presentation', href: 'https://airtable.com/appJNFWOkOHEz40pf/shrkYKHLHjn3QoCUN/tblDNWrr6faGckHBj/viwCwy0VxaZuU6coR/recNHsVGE105Bve6e' }, ' at the Southern California Conference for Undergraduate Research'],
        },
        {
            date: '08/2022',
            parts: ['Joined Pepperdine\'s internal app development team. Owned development for ', { text: 'sso.pepperdine.edu', href: 'https://sso.pepperdine.edu/' }],
        },
        {
            date: '08/2022',
            parts: ['Teaching Assistant for ', { text: 'Dr. Stan Warford', href: 'https://seaver.pepperdine.edu/academics/faculty/stan-warford/' }, ' for 5 semesters'],
        },
        {
            date: '07/2022',
            parts: ['Awarded ', { text: 'Keck Data Science Grant', href: '' }, ' for significant research contribution'],
        },
        {
            date: '07/2022',
            parts: ['Awarded the ', { text: 'Darnell Scholarship', href: '' }, ' by computer science faculty'],
        },
        {
            date: '05/2022',
            parts: ['Began summer research with the ', { text: 'Keck Data Science Institute', href: '' }, ' at Pepperdine University on big data and artificial intelligence'],
        },
    ] satisfies HighlightEntry[],
} as const
