import './aboutMe.css'

import TechStack from "../TechStack/TechStack"


const AboutMe = () => {

    return(
        <>
        <section className='cardContainer'>
            <h2>Personal Statement</h2>
            <p>Motivated career changer fuelled by a lifelong tech passion and a renewed purpose, I'm ready to wheel into software development and make a meaningful impact. A transformative experience ignited a desire to code for good, leading me to build a rock-solid foundation in JavaScript, React, and SQL at Northcoders. A collaborative problem-solver, I thrive in teams, tackling challenges with a results-oriented mindset and an unquenchable thirst for learning.</p>
        </section>
        <TechStack />
        <section className='cardContainer'>
            <h3>Hobbies and Interests</h3>
            <p>Creative - Playing and composing electronic music on my OP-1 synthesiser (I love Teenage Engineering instruments), Collaborating on unique sewing projects with my mum.</p>
            <p>Sustainability - Crafting garden furniture from salvaged timber.</p>
            <p>Personal Development - Family history research.</p>
            <p>Family & Friends - Sharing adventures with my husband, Spending quality time with my beloved dog, Sheldon.</p>

        </section>
        </>
    )

}

export default AboutMe