export type HighlightEntry = {
    date: string
    text: string
}

export const profile = {
    name: 'Timothy Chen',
    headline: "Hi, I'm Tim, a student and engineer.",
    contact: {
        email: 'timothy.chen5@alumnimail.pepperdine.edu',
        linkedin: 'https://www.linkedin.com/in/timochen',
        resume: 'Timothy Chen Resume.pdf',
    },
    highlights: [
        {
            date: '06/2025',
            text: 'Returned to Amazon as a data engineer on the Security Issue Management organization.',
        },
        {
            date: '05/2025',
            text: 'Graduated Summa Cum Laude with a GPA of 3.992/4.000, earning a B.S. in Computer Science & Mathematics from Pepperdine University.',
        },
        {
            date: '12/2024',
            text: 'Featured in Pepperdine\'s 2024 IT Annual Review.',
        },
        {
            date: '05/2024',
            text: 'Amazon data engineering intern on the Alexa Enterprise team in Seattle, WA.',
        },
        {
            date: '04/2024',
            text: 'Awarded the Edison Scholarship by natural science faculty.',
        },
        {
            date: '01/2024',
            text: 'Part-time machine learning engineering intern at ensa.ai, working on video processing and computer vision.',
        },
        {
            date: '12/2023',
            text: 'Published paper on autonomous RC cars (AYURI grant funded).',
        },
        {
            date: '08/2023',
            text: 'Returned to Pepperdine\'s app development team as project lead for esign.pepperdine.edu.',
        },
        {
            date: '07/2023',
            text: 'Awarded the Northrop Grumman Endowed Scholarship; featured in the Pepperdine newsletter.',
        },
        {
            date: '06/2023',
            text: 'Gave an oral research presentation at ISAPA \'23 in Dunedin, New Zealand.',
        },
        {
            date: '05/2023',
            text: 'Samsung software engineering intern on the data intelligence team in Austin, TX.',
        },
        {
            date: '04/2023',
            text: 'Published a paper on language processing; placed in Morgan Stanley\'s CTG Hackathon.',
        },
        {
            date: '12/2022',
            text: 'Published a paper on deep learning for ecology applications.',
        },
        {
            date: '11/2022',
            text: 'Presented research at the Southern California Conference for Undergraduate Research.',
        },
        {
            date: '08/2022',
            text: 'Joined Pepperdine\'s app development team; began Teaching Assistant role (5 semesters); became project lead for sso.pepperdine.edu.',
        },
        {
            date: '07/2022',
            text: 'Received the Keck Data Science Grant and Darnell Scholarship from computer science faculty.',
        },
        {
            date: '05/2022',
            text: 'Started summer research with the Keck Data Science Institute on big data and artificial intelligence.',
        },
    ] satisfies HighlightEntry[],
} as const
