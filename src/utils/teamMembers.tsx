import { Service } from "@/types/services";
import { type TeamMember } from "@/components/TeamCard";
import guyOramImage from "@/assets/team/guy-oram.png";
import phyllisSanchezImage from "@/assets/team/phyllis-sanchez.png";
import daishaCannonImage from "@/assets/team/daisha-cannon.png";
import charlesCannonImage from "@/assets/team/charles-cannon.png";
import mackenzieBannisterImage from "@/assets/team/mackenzie-bannister.png";
import ashlynWilsonImage from "@/assets/team/ashlyn-wilson.png";
import tammyBoagWhitleyImage from "@/assets/team/tammy-boag-whitley.png";
import milevaHuljevImage from "@/assets/team/mileva-huljev.png";
import angelaMartinImage from "@/assets/team/angela-martin.png";
import willCarrollImage from "@/assets/team/will-carroll.png";
import geethikaPillaiImage from "@/assets/team/geethika-pillai.jpg";

// Team member data - Schema: Image, Name, Credential, Title, Services, Bookable, Bio
export const teamMembers: TeamMember[] = [
  {
    image: guyOramImage,
    name: "Guy Oram",
    credential: "PhD",
    title: "President, Clinical Neuropsychologist",
    services: [
      Service.ADHD_LEARNING_DISABILITIES_EVALUATIONS,
      Service.INDEPENDENT_EDUCATIONAL_EVALUATION,
      Service.EF_SKILLS_COACHING,
      Service.AUTISM_DIAGNOSTIC_EVALUATIONS,
      Service.CONCUSSION_NEUROLOGICAL_COGNITIVE_DECLINE,
      Service.PSYCHOTHERAPY,
    ],
    bookable: true,
    bio: (
      <>
        <p>
          Dr. Oram has been practicing as a licensed clinical psychologist since
          1995. His current practice interests focus on adolescents with anxiety
          and depression, Attention Deficit/Hyperactivity Disorder, and
          neuropsychological evaluation of school-aged children and adults. In
          addition, Dr. Oram has a strong interest in student motivation, habit
          change, procrastination and avoidance, and “non-cognitive” factors
          that enhance student success.{" "}
        </p>
        <p>
          Prior to starting his private practice in 1998, Dr. Oram worked in a
          multidisciplinary brain injury rehabilitation program. From 1999 to
          2003, he was an adjunct faculty member in the graduate psychology
          program at Seattle Pacific University. Dr. Oram has also served on the
          Executive Board of the Washington State Psychological Association.
        </p>
      </>
    ),
  },
  {
    image: phyllisSanchezImage,
    name: "Phyllis Sanchez",
    credential: "PhD",
    title: "Clinical Neuropsychologist",
    services: [
      Service.ADHD_LEARNING_DISABILITIES_EVALUATIONS,
      Service.AUTISM_DIAGNOSTIC_EVALUATIONS,
      Service.CONCUSSION_NEUROLOGICAL_COGNITIVE_DECLINE,
    ],
    bookable: true,
    bio: (
      <>
        <p>
          Phyllis Sanchez, Ph.D., is a clinical neuropsychologist with over 25
          years experience providing psychological services. She is licensed in
          the state of Washington, has a Courtesy Clinical Faculty appointment
          in the Department of Psychiatry and Behavioral Sciences at the
          University of Washington, and has been practicing in the Seattle area
          for more than 15 years.
        </p>
        <p>
          Dr. Sanchez has extensive training in neuropsychology, including a two
          year Post-doctoral Fellowship in neuropsychology at the University of
          Washington. She was the Director of the UW Department of Psychiatry
          and Behavioral Sciences Neuropsychology Clinic at Harborview Medical
          Center from 1996–2000. Dr. Sanchez specializes in neurocognitive and
          other related psychological evaluations, and regularly evaluates
          patients with histories of head injury, tumors, strokes, learning
          disabilities, substance abuse, toxin exposures, pain, degenerative
          neurological disease and various psychiatric illnesses.
        </p>
        <p>
          Prior to establishing her private practice in Seattle, Dr. Sanchez
          worked at major regional medical centers in Texas, Illinois and
          Washington, providing varied psychological and neuropsychological
          services. She also has a varied research background, including
          projects ranging from the validity of neuropsychological evaluations
          with a third party present (spouse, parent) to work on adherence to
          dietary restrictions.
        </p>
      </>
    ),
  },
  {
    image: daishaCannonImage,
    name: "Daisha Cannon",
    credential: "EDS, NCSP, LMHCA",
    title: "School Psychologist",
    services: [
      Service.INDEPENDENT_EDUCATIONAL_EVALUATION,
      Service.KINDERGARTEN_EARLY_ENTRANCE_ASSESSMENT,
    ],
    bookable: true,
    bio: (
      <>
        <p>
          Daisha Cannon is a nationally certified School Psychologist with
          extensive experience evaluating students ranging in age from 2 to 21.
          She is driven by a passion for understanding the needs of students and
          providing the support and advocacy needed to improve their academic
          functioning. In addition to her work at FPSK, Daisha is a school
          psychologist in the Kent School District.
          <p>
            Daisha attended Northern Arizona University where she received her
            Bachelors of Science in Psychology. She earned her Master’s in
            Educational Psychology and also an Educational Specialist degree in
            School Psychology at Argosy University in Phoenix, AZ.
          </p>
        </p>
      </>
    ),
  },
  {
    image: charlesCannonImage,
    name: "Charles Cannon",
    credential: "EDS, NCSP, LMHCA",
    title: "School Psychologist",
    services: [
      Service.INDEPENDENT_EDUCATIONAL_EVALUATION,
      Service.KINDERGARTEN_EARLY_ENTRANCE_ASSESSMENT,
    ],
    bookable: true,
    bio: (
      <>
        <p>
          Charles Cannon is a nationally certified School Psychologist with
          extensive experience evaluating students ranging in age from 2 to 21.
          He is driven by a passion for understanding the needs of students and
          providing the support and advocacy needed to improve their academic
          functioning. In addition to his work at FPSK, Charles is a school
          psychologist in the Kent School District.
        </p>
        <p>
          Charles attended Northern Arizona University where he received his
          Bachelors of Science in Psychology. He earned his Master’s in
          Educational Psychology and also an Educational Specialist degree in
          School Psychology at Argosy University in Phoenix, AZ.
        </p>
      </>
    ),
  },
  {
    image: geethikaPillaiImage,
    name: "Geethika Pillai",
    credential: "PsyD, LMHCA",
    title: "Clinical Neuropsychology Postdoctoral Fellow",
    services: [
      Service.ADHD_LEARNING_DISABILITIES_EVALUATIONS,
      Service.INDEPENDENT_EDUCATIONAL_EVALUATION,
      Service.AUTISM_DIAGNOSTIC_EVALUATIONS,
      Service.PSYCHOTHERAPY,
    ],
    bookable: true,
    bio: (
      <>
        <p>
          Dr. Geethika Pillai is a clinical neuropsychology postdoctoral
          fellow whose work is grounded in the belief that minds that work
          differently deserve to be deeply understood, not simply pathologized.
          With clinical expertise spanning neuropsychological assessment and
          psychotherapy, she specializes in working with neurodivergent
          individuals, those navigating ADHD, autism, learning differences, and
          complex behavioral health needs.
        </p>
        <p>
          Dr. Geethika's educational journey has spanned three continents,
          shaping a rich, culturally attuned lens that informs her clinical
          care. She completed her high school education in New Delhi, India,
          before participating in an academic exchange program in Germany, where
          she studied biomedical sciences. Driven by a passion for psychology
          and human behavior, she then moved to the United States to pursue
          higher education, earning her Bachelor’s in Psychology from the
          University of Wisconsin–Milwaukee, followed by both her Master’s and
          Doctorate in Clinical Psychology (with a concentration in
          Neuropsychology) from the California School of Professional
          Psychology. Her training has taken her through medical hospitals,
          community clinics, and private practices, equipping her with a unique
          ability to meet patients where they are, across developmental stages
          and cultural contexts.
        </p>
        <p>
          At the heart of her work is a passion for helping individuals who have
          felt misunderstood, unseen, or “too much” finally feel heard. Dr.
          Pillai brings a powerful mix of scientific precision, heartfelt
          advocacy, and deep human curiosity to every clinical encounter. She is
          committed to co-creating spaces of safety, clarity, and growth, where
          people can reclaim the narrative of their minds.
        </p>
      </>
    ),
  },
  {
    image: mackenzieBannisterImage,
    name: "Mackenzie Bannister",
    title: "Therapist",
    services: [Service.PSYCHOTHERAPY, Service.EMDR_THERAPY],
    bookable: true,
    bio: (
      <>
        <p>
          Mackenzie (she/her) is a passionate Marriage and Family Therapist
          Associate who joined the team with a focus on nurturing relationships
          and personal growth. With a degree from Seattle University, she
          specializes in working with couples, families, and individuals, using
          a blend of Emotionally Focused Therapy and Narrative Therapy to meet
          clients where they are, all while infusing empathy and authenticity
          into the therapeutic journey.
        </p>
        <p>
          Mackenzie believes in the power of self-discovery and resilience. She
          collaborates with clients to identify their strengths and areas for
          growth, guiding them toward their self-defined goals. Additionally,
          she is trained in Eye Movement Desensitization and Reprocessing (EMDR)
          to offer additional support for those navigating trauma. She also has
          over 10+ years of experience with health and wellness coaching focused
          on chronic conditions, behavior change, and mental health.
        </p>
        <p>
          With a deep commitment to fostering individual potential, Mackenzie is
          dedicated to creating a safe and supportive environment where clients
          can explore their emotions and build meaningful connections. When
          she’s not in the office, she enjoys exploring the beautiful Pacific
          Northwest and spending quality time with loved ones.
        </p>
      </>
    ),
  },
  {
    image: ashlynWilsonImage,
    name: "Ashlyn Wilson",
    title: "MFT Intern",
    services: [Service.PSYCHOTHERAPY, Service.EMDR_THERAPY],
    bookable: true,
    bio: (
      <>
        <p>
          Ashlyn Wilson is a Couples and Family Therapy intern at Family
          Psychological Services of Kirkland. They believe in the power therapy
          has to empower people and improve quality of life. Ashlyn is
          interested in working with families and youth to create positive long
          term change in the lives of their clients. Ashlyn has a passion for
          serving neurodivergent communities, queer communities, and youth
          navigating early adolescence. Ashlyn cares about meeting clients where
          they are and understanding them as individuals with a unique history
          and experiences. Ashlyn practices from a strength based perspective
          and strives to collaborate with clients to create a meaningful life.
          They are currently completing a Master of Arts degree in Couples and
          Family Therapy at Seattle University. In addition, Ashlyn has two
          years of experience as a behavior specialist, providing one on one
          support to clients with behavioral or developmental disorders
          including ASD, ADHD and ODD.
        </p>
      </>
    ),
  },
  {
    image: tammyBoagWhitleyImage,
    name: "Tammy Boag Whitley",
    title: "Lead Psychometrist",
    services: [],
    bio: (
      <>
        <p>
          Tammy is a psychometrist with over 20 years of experience
          administering neuropsychological assessments to persons of all ages.
          She has worked in a variety of clinical and research settings with
          individuals experiencing a broad range presenting concerns, including
          learning disabilities, traumatic brain injury, stroke, neurological
          disorders, and forensic/legal evaluations.
        </p>
        <p>
          As she administers test batteries, Tammy strives to establish a
          supportive and encouraging relationship with the examinee, with a goal
          of generating assessment results that accurately reflect the client’s
          current skills and abilities.
        </p>
      </>
    ),
  },
  {
    image: milevaHuljevImage,
    name: "Mileva Huljev",
    title: "Coach",
    services: [Service.EF_SKILLS_COACHING, Service.FOREST_BATHING],
    bookable: true,
    bio: (
      <>
        <p>
          Mileva (she/they) joined the FPSK team with over 16 years of
          experience in educational settings; specializing in leadership and
          life skills, co-created coaching plans, and experiential learning.
          Meeting people where they are at -paired with humor and compassion-
          underscore every learning journey. Mileva works with clients to
          support their self-efficacy: identifying strengths, areas for
          improvement, and working toward client-determined goals.
        </p>
        <p>
          A calling to foster individual potential has fueled degrees in
          Psychology, Fine Arts (University of Washington) and human
          development, earning a M.Ed. in Student Development (Seattle
          University). Mileva additionally trained to be a certified guide for
          Nature & Forest Therapy; facilitating deeper connections with
          ourselves, others, and the environment.
        </p>
      </>
    ),
  },
  {
    image: angelaMartinImage,
    name: "Angela Martin",
    title: "Operations Specialist",
    services: [],
    bio: (
      <>
        <p>
          Angela is a Certified Medical Assistant and is currently pursuing her
          Bachelor of Science in Business Administration with a minor in
          Marketing at City University of Seattle. She has worked in the medical
          field for the past 10 years. After completing her Medical Assistant
          degree, she worked at the Lakeshore Clinic for three years. Prior to
          joining FPSK, Angela worked as a manager and individual support
          counselor for the Camelot Society.
        </p>
      </>
    ),
  },
  {
    image: willCarrollImage,
    name: "Will Carroll",
    title: "Assistant to the Clinical Director",
    services: [Service.EF_SKILLS_COACHING],
    bookable: true,
    bio: (
      <>
        <p>
          As the Assistant to the Clinical Director, Will provides support to
          the FPSK team, including administrative support to Dr. Oram and
          coverage for the intake coordinator and the billing specialist. In
          addition, Will is an executive functioning skills coach and
          administers psychological and neuropsychological tests as a
          psychometrist.
        </p>
        <p>
          Prior to joining the FPSK team, Will worked as a registered behavioral
          technician (RBT), supporting children 2-8 years old with autism. In
          this role he implemented strategies from behavioral therapy to help
          clients learn communication, advocacy, and life-skills to gain a
          greater sense of independence. Additionally, Will was a research
          assistant in two laboratories in the Santa Clara University Department
          of Psychology, where he studied online dating behaviors and
          metacognition.
        </p>
        <p>
          Will is a recent graduate with a Bachelor of Science degree in
          Psychology. He is currently working towards admission in a graduate
          program in clinical or counseling psychology. Will is passionate about
          joining the field and derives fulfillment from helping clients
          progress towards their goals.
        </p>
      </>
    ),
  },
];

/**
 * Get team members who provide a specific service
 */
export function getTeamMembersByService(service: Service): TeamMember[] {
  return teamMembers.filter((member) => member.services.includes(service));
}

/**
 * Get bookable team members who provide a specific service
 */
export function getBookableTeamMembersByService(
  service: Service
): TeamMember[] {
  return teamMembers.filter(
    (member) => member.services.includes(service) && member.bookable === true
  );
}
