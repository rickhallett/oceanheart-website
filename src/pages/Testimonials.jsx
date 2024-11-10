import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Testimonials.css';

const reviews = [
    {
        name: "ROBERT WARWICK",
        location: "GB",
        rating: 5,
        date: "19 Oct 2024",
        content: "Rick is fantastic. I've been through wellbeing several times, all the previous times the practitioner were good. But Rick went down a different route to previous practitioners, instead of going down a medical route, he focused on a self acceptance and spiritual route, which fitted in well my faith (Christian). Before my first session I had a picture of a middle ages guy in a shirt and tie, Rick could not be further from that, here was a guy in a t-shirt with the sleeves cut off, muscles, more like a cool surfer guy. Me and Rick connected straight away, he made me feel relaxed and at ease. I want to thank Rick so much, because he has helped me find myself again. Having been discharged from wellbeing today, I can honestly say that though I'm happy about being discharged, I'm also sad that I won't get to have my weekly chats with him.",
        date: "18 October 2024"
    },
    {
        name: "Kate",
        location: "GB",
        rating: 5,
        date: "20 Oct 2024",
        content: "Phenomenal CBT Therapist! Richard is a kind, compassionate and empathetic therapist who instinctively knows how to put you at ease. Having never done therapy before, I started the process with all kinds of doubt, fear and trepidation – almost looking for the nearest exit before I’d begun! Yet, guided by Richard’s warmth and humour, all my scepticism quickly melted away. I soon felt the healing power of being able to talk freely in a safe space. A great listener, Richard was able to make fantastic suggestions for books, diaries and other tools which I found invaluable in between sessions as a means of reflection and personal growth. Ultimately, and after only a few sessions, I now feel like me again; ready to move forward with an open heart and a sense of optimism for the future, safe in the knowledge that I am better equipped to deal with life’s challenges. Richard is a truly gifted therapist with a generous spirit. I sincerely hope that others allow themselves the opportunity and privilege of collaborating with him on their own personal journey. I honestly can’t recommend him highly enough! Thank you so much Richard for all your help and support.",
    },
    {
        name: "Ali Jarvis",
        location: "GB",
        rating: 5,
        date: "16 Sept 2024",
        content: "I cannot recommend Richard highly enough. I was referred for therapy to address my anxiety which was having a massively negative impact on my life. Whilst I was not an all out sceptic of holistic therapies, at the start I struggled to see how this therapy could or would be able to help me. With Richard’s guidance and wonderfully wicked sense of humour, the onion of futile resistance has been well and truly smashed! Thanks to Richard I have my life back and feel suitably equipped to continue improving every day with the safety net of being able to reach out to Richard in the future should I need to.",
    },
    {
        name: "Lydia McManus",
        location: "GB",
        rating: 5,
        date: "30 Aug 2024",
        content: "I honestly cannot recommend Richard enough!! I had 8 sessions all together and I can feel so much of a difference. I have gained a lot from my sessions, from insights, tools, recommendations and more. There have been many occasions where I have experienced light bulb moments that have been life changing and make me understand so much. Richard is understanding, empathetic and has a calming presence. He also has a great sense of humour that has put me at ease from my first session, being able to laugh throughout sessions is something I was so grateful for. Richard creates a safe environment in which you can truly open up and gain a lot from. Thank you for everything!",
    },
    {
        name: "Lauren Rebecca",
        location: "GB",
        rating: 5,
        date: "10 Aug 2024",
        content: "I was referred to Richard for therapy for my OCD. I found his guidance really helpful in explaining concepts for ACT therapy and allowing me to work on my symptoms. Even though some sessions were tough for me mentally, Richard always found a way to make the concepts relatable or a way to divert the conversation to help me calm down (and mostly laugh) before returning to the topic.",
        },
    {
        name: "Sarah",
        location: "GB",
        rating: 5,
        date: "3 Jun 2024",
        content: "The whole theory behind does it help!! Well absolutely, yes! Richard has been an enormous help, guidance and support throughout my sessions and comes highly recommended by myself and others no doubt. I will carry on believing in myself and trusting each step I take is a plan to strive to achieve my potential that I had lost and thanks to Richard I have now and will continue gaining. Thank you, wholeheartedly.",
    },
    {
        name: "Nafiya",
        location: "GB",
        rating: 5,
        date: "4 Jun 2024",
        content: "Many people have told me therapy is a waste of time and I grew up believing in this! Since starting my sessions with Richard, I have found the confident , strong powerful woman I forgot I was especially during my most anxious times. I felt extremely comfortable sharing feelings and thoughts, I felt I could benefit from many strategies we spoke about, he was very professional yet friendly enough to crack a few jokes which was fantastic. Thank you Richard!",
    },
    {
        name: "Anonymous",
        location: "GB",
        rating: 5,
        date: "7 Jun 2024",
        content: "Richard’s guidance, support and insights really resonate. You can take something out of every session, which in turn helps you make gradual changes in your life. In other words, a life-changing experience. Thank you so much!",
        },
    {
        name: "Aureliana Enache",
        location: "GB",
        rating: 5,
        date: "4 Jun 2024",
        content: "Rick is a very gifted, empathetic and highly professional therapist. A meditator, so the holding and advice comes from an intuitive, spiritual space. If you want to discuss situations in depth, clear out emotions at the somatic level or find better life strategies, definitely book with Rick Hallett.",
    },
    {
        name: "Mary",
        location: "GB",
        rating: 5,
        date: "8 Jun 2024",
        content: "I have benefitted immensely from my sessions with Richard and feel lighter in the mind, body, and soul. He is a professional and a well-mannered therapist, who was able to create a safe space emotionally and mentally so I could open up and speak. Especially as a trauma-informed therapist; he was sympathetic, empathetic and non-judgemental in his approach. In this manner we proceeded through the traumas that can leave one feeling frozen. Furthermore, experiencing symptoms such as: emotional and physical pain throughout the body; depression, anxiety, insomnia, numbness, disassociation, isolation, fear, heartbreak, grief and many more indicators. Richard aided me through the darkness to a place where one can see light, he is a source for good change guiding one within, through some of the darkest wounds; I would not have favored to face alone, and did not know how to. He aided me with psychology terms and knowledge to explain my states and what was happening—which is essence was a therapeutic and educational process... do trust the process.",
        },
    {
        name: "Barry J Wale",
        location: "GB",
        rating: 5,
        date: "3 Jun 2024",
        content: "My experience talking to Richard was truly enlightening. Together we found a way forward, and I am deeply in his debt. An intelligent listener with great compassion and understanding of the human mind.",
            },
    {
        name: "alfie",
        location: "GB",
        rating: 5,
        date: "15 Aug 2024",
        content: "Having come to Richard with dark intrusive thoughts about harming other loved ones and a truly crazy high score of OCD after nearly 2 years of suffering with the symptoms of this sometimes needing to be scared of even the most basic daily tasks, spending the 6 sessions with Richard working on where these stem from, how to overcome these and break these down, what these truly mean and how meditation and workbooks can make a huge difference when suffering from Harm OCD, Richard and myself have worked session by session to channel this into where I am today with little to no strange thoughts these days, and life’s a much brighter place to be. Sessions have been entertaining as well as insightful, I really could not have done this without Richard. By far the best therapist I have had coming off the back of CBT and reconstructive thought therapy, doing the ERP therapy with Richard really has made such a difference, could not recommend Richard highly enough and such a great guy!",
    },
]

const googleReviews = [
    {
        name: 'Jacob Lagat',
        location: 'GB',
        rating: 5,
        date: '2 days ago',
        title: 'Life-changing experience.',
        content: `I’m posting this review using a throwaway account. My identity isn’t important. What’s important is that Richard quite literally changed my life.
  
  I have spent at least 10 years suffering from clinical depression. I tried counselling, medication and pretty much every self-help solution you can think of. But none of it really stuck, and so I felt myself spiralling in an endless loop of hopelessness, low energy and dark thoughts. I finally waved the white flag and referred myself to the NHS, where I was eventually assigned to Richard.
  
  It was nerve-wracking at first, having to open up and tell my story to a complete stranger over the phone… even if he was a therapist. But Richard put me at ease very quickly. He’s so funny and down-to-earth that for a moment I genuinely forgot I was having a therapy session. As pointed out by a previous reviewer, Richard seamlessly blends the human and therapist together in such a way that talking with him just felt natural. Beyond that, he was able to outline and pick apart my mind in ways that I’ve never been able to do on my own.
  
  My first session with him lasted over an hour, but for the first week after that (and I’m not exaggerating when I say this) I’d never felt so relieved; being able to identify my core beliefs and understand their importance in the cycle of my depression alone was incredibly liberating. It enabled me to see the world from a very different perspective.
  
  Since then I have worked with Richard week after week, making more and more progress with each session. I’m not going to give much more detail about myself and how this man has helped me, but I’m hoping that everything I’ve shared so far is enough.
  
  He’s as real as it gets.`,
        link: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUMzemJUeThnRRAB!2m1!1s0x0:0x451935ba377f3a26!3m1!1s2@1:CIHM0ogKEICAgIC3zbTy8gE%7CCgsI_rW1uQYQ6LyneA%7C?hl=en-GB',
    },
    {
        name: 'Rebecca O',
        location: 'GB',
        rating: 5,
        date: '3 weeks ago',
        title: 'A truly exceptional therapist.',
        content: `I think the first thing I want to get out of the way is how easy you can misjudge someone purely based on their aesthetic. I'm ashamed to say that I did this when I was first told Rick would be my therapist (NHS). I saw his exterior, assigned some nonsense narrative based on my own personal, unresolved issues and considered them to be fact. Before our first session, I was genuinely wary and a little bit anxious. Why say all of this? I say it so that you don't do what I initially did and potentially end up missing out on an opportunity to really explore yourself and get to the heart of what is actually going on.
  
  Rick is genuinely an exceptional therapist. I cannot stress the word "exceptional" enough either. He is so authentic with his approach. In 12 weeks, he progressed my healing journey more than any therapist I've seen over the past 8 years. Sessions were online, which I expected to be a barrier, but was surprisingly comforting when it came to exploring deep emotions. The impact didn't stop in the sessions either, I would find myself in familiar (unhelpful) situations and instead of halting at the impasse, I'd remember our sessions and consider doing something different. He is capable of flexibly working beyond the traditional therapeutic client/ therapist boundaries, whilst also managing to keep them very clear, so you always feel safe enough to explore a little more.
  
  Something that I massively appreciated was the visual diagrams that were created during some sessions. It really made the abstract more concrete for me and prevented things from getting lost in the melee of my intense emotions. I was surprised at how much it enhanced the experience. At the end of our time together I was able to get a copy of the diagrams and our session notes from each week. This allowed me to revisit my journey and actually see where I started out. It was not overwhelming or shaming either, just factual and I loved it.
  
  Ultimately though, Rick is a man of heart first and a therapist second and you will recognise this from the first session. He seamlessly combines the two so you feel safe and held. He doesn't try to square-peg-round-hole you, instead he asks questions and takes it from there. In case you had not figured this out already... I highly recommend.`,
        link: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNYbTRucFZnEAE!2m1!1s0x0:0x451935ba377f3a26!3m1!1s2@1:CIHM0ogKEICAgICXm4npVg%7CCgsIxMLVuAYQ6J7uOg%7C?hl=en-GB',
    },
];

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Testimonials = () => {
    const allReviews = [...reviews, ...googleReviews];
    return (
        <div className="work-together">
            {/* <h2>Fellow Traveller Testimonials</h2> */}
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                showThumbs={false}
                showStatus={false}
                           >
                {allReviews.map((review, index) => (
                    <div key={index} className="review-slide">
                        <h3>{review.title}</h3>
                        <p className="review-content">{review.content.slice(0, 300)}...</p>
                        <p className="review-author">
                            — {review.name}, <em>{review.date}</em>
                        </p>
                        <a
                            href={review.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="read-more-link"
                        >
                            Read full review
                        </a>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Testimonials;