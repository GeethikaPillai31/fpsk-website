import type { ReactNode } from "react";

/**
 * Service type representing all services offered by FPSK
 */
export const Service = {
  // Assessments
  ADHD_LEARNING_DISABILITIES_EVALUATIONS:
    "ADHD_LEARNING_DISABILITIES_EVALUATIONS",
  AUTISM_DIAGNOSTIC_EVALUATIONS: "AUTISM_DIAGNOSTIC_EVALUATIONS",
  CONCUSSION_NEUROLOGICAL_COGNITIVE_DECLINE:
    "CONCUSSION_NEUROLOGICAL_COGNITIVE_DECLINE",
  KINDERGARTEN_EARLY_ENTRANCE_ASSESSMENT:
    "KINDERGARTEN_EARLY_ENTRANCE_ASSESSMENT",
  INDEPENDENT_EDUCATIONAL_EVALUATION: "INDEPENDENT_EDUCATIONAL_EVALUATION",

  // Therapy & Coaching
  PSYCHOTHERAPY: "PSYCHOTHERAPY",
  EF_SKILLS_COACHING: "EF_SKILLS_COACHING",
  ADHD_INFORMED_COUPLES_FAMILY_THERAPY: "ADHD_INFORMED_COUPLES_FAMILY_THERAPY",
  EMDR_THERAPY: "EMDR_THERAPY",
  FOREST_BATHING: "FOREST_BATHING",
} as const;

export type Service = (typeof Service)[keyof typeof Service];

/**
 * Service category type
 */
export type ServiceCategory = "assessment" | "therapy-coaching";

/**
 * Service display labels mapping
 */
export const SERVICE_LABELS: Record<Service, string> = {
  [Service.ADHD_LEARNING_DISABILITIES_EVALUATIONS]:
    "ADHD and Learning Disabilities Evaluations",
  [Service.AUTISM_DIAGNOSTIC_EVALUATIONS]: "Autism Diagnostic Evaluations",
  [Service.CONCUSSION_NEUROLOGICAL_COGNITIVE_DECLINE]:
    "Concussion, Neurological Illness/Injury, Cognitive Decline",
  [Service.KINDERGARTEN_EARLY_ENTRANCE_ASSESSMENT]:
    "Kindergarten Early Entrance Assessment",
  [Service.INDEPENDENT_EDUCATIONAL_EVALUATION]:
    "Independent Educational Evaluation",
  [Service.PSYCHOTHERAPY]: "Psychotherapy",
  [Service.EF_SKILLS_COACHING]: "EF Skills Coaching",
  [Service.ADHD_INFORMED_COUPLES_FAMILY_THERAPY]:
    "ADHD-Informed Couples and Family Therapy",
  [Service.EMDR_THERAPY]: "EMDR Therapy",
  [Service.FOREST_BATHING]: "Forest Bathing",
};

/**
 * Service categories mapping
 */
export const SERVICE_CATEGORIES: Record<Service, ServiceCategory> = {
  [Service.ADHD_LEARNING_DISABILITIES_EVALUATIONS]: "assessment",
  [Service.AUTISM_DIAGNOSTIC_EVALUATIONS]: "assessment",
  [Service.CONCUSSION_NEUROLOGICAL_COGNITIVE_DECLINE]: "assessment",
  [Service.KINDERGARTEN_EARLY_ENTRANCE_ASSESSMENT]: "assessment",
  [Service.INDEPENDENT_EDUCATIONAL_EVALUATION]: "assessment",
  [Service.PSYCHOTHERAPY]: "therapy-coaching",
  [Service.EF_SKILLS_COACHING]: "therapy-coaching",
  [Service.ADHD_INFORMED_COUPLES_FAMILY_THERAPY]: "therapy-coaching",
  [Service.EMDR_THERAPY]: "therapy-coaching",
  [Service.FOREST_BATHING]: "therapy-coaching",
};

/**
/**
 * Service short descriptions mapping - used for service cards
 */
export const SERVICE_DESCRIPTIONS: Record<Service, string> = {
  [Service.ADHD_LEARNING_DISABILITIES_EVALUATIONS]:
    "Evaluations for children, adolescents, and adults designed to identify learning disabilities and ADHD.",
  [Service.AUTISM_DIAGNOSTIC_EVALUATIONS]:
    "ASD evaluations for individuals ranging in age from 3 years through adulthood.",
  [Service.CONCUSSION_NEUROLOGICAL_COGNITIVE_DECLINE]:
    "Comprehensive assessments for differential diagnosis of a broad range of disorders.",
  [Service.KINDERGARTEN_EARLY_ENTRANCE_ASSESSMENT]:
    "Administered by school psychologists.",
  [Service.INDEPENDENT_EDUCATIONAL_EVALUATION]:
    "In-depth evaluations providing parents and school district staff with an independent assessment of a student's current functioning and academic needs.",
  [Service.PSYCHOTHERAPY]:
    "Individual and family therapy for children, teens, and adults.",
  [Service.EF_SKILLS_COACHING]:
    "Master's level coaches work on building skills around executive functioning.",
  [Service.ADHD_INFORMED_COUPLES_FAMILY_THERAPY]:
    "Therapy focused on supporting ADHD families and couples.",
  [Service.EMDR_THERAPY]: "Eye Movement Desensitization and Reprocessing.",
  [Service.FOREST_BATHING]:
    "Walks are offered in local parks with easy terrain in mind; at a gentle and slow pace, suitable for all-bodies.",
};

/**
 * Service long descriptions mapping - used for service detail pages
 * These can contain JSX/React elements for rich formatting
 */
export const SERVICE_LONG_DESCRIPTIONS: Record<Service, ReactNode> = {
  [Service.ADHD_LEARNING_DISABILITIES_EVALUATIONS]:
    "We provide evaluations designed to identify learning disabilities and ADHD in children, adolescents, and adults.  These evaluations assist students, their families, and school staff to develop effective teaching strategies, academic accommodations, specially designed instruction, and academic support tailored to the student's specific pattern of strengths and weaknesses.  ADHD and Learning Disabilities Evaluations also provide recommendations for community-based services, online resources, and empirically validated treatment/interventions.",
  [Service.AUTISM_DIAGNOSTIC_EVALUATIONS]:
    "Our clinicians perform ASD evaluations for individuals ranging in age from 3 years through adulthood.  The assessment process includes gathering information regarding developmental and psychosocial history, using questionnaires and interviews with the individual's parents, caregivers, or teachers. In addition, the clinician uses several standardized assessment tools to measure the individual's cognitive abilities, academic functioning, language skills, and social communication skills. Also, the individual’s behavior and interactions is observed in various settings, including structured and unstructured clinic settings and school/classroom environments",
  [Service.CONCUSSION_NEUROLOGICAL_COGNITIVE_DECLINE]:
    "Our neuropsychologists administer comprehensive assessments to aid in the differential diagnosis of broad range of disorders that may be caused by neurological injury or altered brain function, including concussions, mild traumatic brain injuries, stroke, and dementia",
  [Service.KINDERGARTEN_EARLY_ENTRANCE_ASSESSMENT]:
    "Administered by school psychologists with expertise in working with younger children, these evaluations assess cognitive, academic, and social emotional readiness for young students who are being considered for early entrance to kindergarten. ",
  [Service.INDEPENDENT_EDUCATIONAL_EVALUATION]:
    "These in-depth evaluations provide parents and school district staff with an independent assessment of a student’s current functioning and academic needs.  IEEs include evaluation of the student’s cognitive abilities, academic skills, emotional and behavioral functioning, a comprehensive review of relevant academic records and prior evaluation results, interviews with parents, students, and school staff, and observation of the student during the school day. ",
  [Service.PSYCHOTHERAPY]:
    "Our therapists support children, teens, adults, and families who are expereincing various life challenges from anxiety and depression to school and job concerns as well as life transitions.",
  [Service.EF_SKILLS_COACHING]: (
    <>
      <p>
        Executive functioning skill building is a core aspect of our approach to
        clients struggling at home, school, or work settings. It can help boost
        anyone's ability to get organized, resist impulses, stay focused, use
        time wisely, plan, follow through on tasks, learn from mistakes, stay in
        control of emotions, solve problems independently, and be resourceful.
        Clients with ADHD are particularly likely to benefit from EF coaching.
      </p>
      <p>
        Coaching interventions are designed to improve metacognitive skills,
        self-monitoring, and behavioral regulation. Our clinicians work with
        clients and their families to develop effective compensatory strategies
        that can be implemented at home, school/work, and in the community. As a
        treatment team, we use principles of ADHD and executive skills coaching
        to address challenges related to:
      </p>
      <ul className="list-disc list-inside mt-4 space-y-2">
        <li>Procrastination/avoidance</li>
        <li>Difficulties with time management</li>
        <li>Task initiation</li>
        <li>Organization/planning</li>
        <li>Inflexibility and emotional reactivity</li>
        <li>Functional working memory in everyday situations</li>
        <li>Tracking academic/work tasks</li>
      </ul>
    </>
  ),
  [Service.ADHD_INFORMED_COUPLES_FAMILY_THERAPY]: (
    <>
      <p>
        As a clinic specializing in the treatment of clients living with ADHD,
        our therapists and interns provide both ADHD-informed couples and family
        therapy. Therapy in this framework is grounded in an understanding of
        the complex interplay between relational conflicts and the emotional
        self-regulation difficulties, challenging behaviors, impulsivity and
        poor consequential thinking, and rejection sensitivity that may be
        present in family members with ADHD. Our therapists work with couples
        and families to understand the impact of ADHD symptoms on the
        couple/family relationships and help clients to develop collaborative,
        proactive solutions to resolve conflict or problems in the functioning
        of the relationship or family system. Here are potential benefits of
        ADHD-informed couples or family therapy:
      </p>
      <div className="mt-6 space-y-6">
        <div>
          <h3 className="font-bold text-gray-900 mb-2">
            Increased Understanding of ADHD
          </h3>
          <p>
            Family or partners gain a better understanding of ADHD as a
            neurodevelopmental disorder rather than seeing problematic behaviors
            as personal flaws or signs of disrespect. Our therapists work to
            educate everyone about how ADHD manifests and help reframe negative
            assumptions about each other's actions, intentions, and emotions. In
            family therapy, our clinicians also provide parenting support to
            help manage the impact of ADHD on the family system.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-2">
            Support with Organization and Time Management
          </h3>
          <p>
            Partners or family members can play a supportive role by helping
            with strategies for planning, organizing, and managing time
            effectively. Our therapists help the family set up systems that make
            it easier for the person with ADHD to meet responsibilities, while
            also promoting agency and autonomy.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-2">
            Developing Empathy and Patience
          </h3>
          <p>
            ADHD symptoms, such as inattention or forgetfulness, can sometimes
            be misinterpreted as laziness or a lack of care. We encourage family
            members to develop empathy and patience, recognizing that these
            behaviors are not intentional, strengthening emotional bonds and
            reducing the potential for resentment and misunderstanding.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-2">
            Conflict Resolution Skills
          </h3>
          <p>
            ADHD can increase impulsivity, inflexibility, and emotional
            reactivity, which can lead to arguments. Our clinicians work with
            clients to develop constructive ways to handle disagreements,
            teaching skills for pausing, active listening, and de-escalating
            tensions.
          </p>
        </div>
      </div>
      <p className="mt-6 font-bold text-gray-900">
        When ADHD affects one member of a family or couple, everyone can be
        impacted. ADHD-informed couples and family fosters teamwork and brings
        everyone onto the same page, leading to better outcomes for the
        individual with ADHD and improved functioning at home, school or work,
        and in the community.
      </p>
    </>
  ),
  [Service.EMDR_THERAPY]:
    "EMDR is an evidence-based therapy which can help individuals process and navigate difficult or traumatic events which affect their present emotional state. Clinicians guide patients through sets of  eye movements alternating patterns of REM (rapid eye movement) that occur during sleep. This, paired with brief reports on what they are experiencing  can help individuals organize feelings, emotions, and thoughts.",
  [Service.FOREST_BATHING]: (
    <>
      <p>
        Forest Bathing is a research-based framework for supporting healing and
        wellness through immersion in natural environments. Also known as Nature
        or Eco Therapy, this modality is inspired by the Japanese practice of
        Shinrin-Yoku (loose translation: forest bathing). Guided Forest Bathing
        walks offer a sequence of sensory awareness invitations to activate your
        parasympathetic nervous system, eventually resulting in a state of
        relaxation, lower stress hormones and an immune system boost for up to a
        month.
      </p>
      <div className="mt-6">
        <h3 className="font-bold text-gray-900 mb-3">
          Who is this for? Everyone! Studies have demonstrated a wide array of
          health benefits, including:
        </h3>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>Improved cognition, creativity, focus and productivity</li>
          <li>Feeling recharged, restored energy levels, and better sleep</li>
          <li>
            Increased ability to manage anxiety, burnout, anger, grief,
            depression, fatigue, blood pressure (low and high), and other
            chronic health challenges
          </li>
          <li>Gained sense of connection, wonder, and awe</li>
        </ul>
      </div>
      <p className="mt-6">
        Walks are offered in local parks with easy terrain in mind; at a gentle
        and slow pace, suitable for all-bodies. Please ask if you have any
        questions about accessibility.
      </p>
      <div className="mt-6">
        <h3 className="font-bold text-gray-900 mb-3">Schedule of Walks</h3>
        <ul className="space-y-2">
          <li>
            <strong>April 25 (Fri)</strong> 3pm-4:30pm
          </li>
          <li>
            <strong>May 10 (Sat)</strong> 1pm-2:30pm
          </li>
          <li>
            <strong>June 21 (Sat)</strong> 1:30pm-3pm
          </li>
          <li>
            <strong>August 2 (Sat)</strong> 11am-12:30pm
          </li>
          <li>
            <strong>September 20 (Sat)</strong> 2pm-3:30pm
          </li>
          <li>
            <strong>October 12 (Sun)</strong> 2pm-3:30pm
          </li>
        </ul>
      </div>
      <p className="mt-6">
        Each walk is a unique experience. You can expect an opportunity to slow
        down; physically and mentally. To get curious, to investigate, to feel,
        to play, and otherwise interact with the here/now of life. To just be
        yourself, as imperfect and healthy as the trees.
      </p>
      <p className="mt-6">
        Best for ages 14+, small group walks are $100 per person, for 120
        minutes. Private, one-on-one walks can also be arranged.
      </p>
      <p className="mt-6">
        Contact{" "}
        <a
          href="mailto:mileva@fpskirkland.com"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          mileva@fpskirkland.com
        </a>{" "}
        for more information and to{" "}
        <strong>
          register in advance (by the Wednesday prior to the walk)!
        </strong>
      </p>
      <p className="mt-6">
        Mileva is a certified guide with The Association for Nature & Forest
        Therapy (ANFT); believing wholeheartedly in the transformative and
        healing potential of the outdoors. Mileva has been designing and
        facilitating experiences that connect people more deeply to themselves
        and the natural world for over 18 years.
      </p>
    </>
  ),
};

/**
 * Get the display label for a service
 */
export function getServiceLabel(service: Service): string {
  return SERVICE_LABELS[service] || service;
}

/**
 * Get the short description for a service (for cards)
 */
export function getServiceDescription(service: Service): string {
  return SERVICE_DESCRIPTIONS[service] || "";
}

/**
 * Get the long description for a service (for detail pages)
 */
export function getServiceLongDescription(service: Service): ReactNode {
  return SERVICE_LONG_DESCRIPTIONS[service] || "";
}

/**
 * Get the category for a service
 */
export function getServiceCategory(service: Service): ServiceCategory {
  return SERVICE_CATEGORIES[service];
}

/**
 * Service cover images mapping - using dynamic imports
 */
import adhdLearningDisabilitiesImage from "@/assets/services/adhd-learning-disabilities.png";
import autismDiagnosticEvaluationsImage from "@/assets/services/autism-diagnostic-evaluations.png";
import concussionNeurologicalImage from "@/assets/services/concussion-neurological.png";
import kindergartenAssessmentImage from "@/assets/services/kindergarten-assessment.png";
import independentEducationalEvaluationImage from "@/assets/services/independent-educational-evaluation.png";
import psychotherapyImage from "@/assets/services/psychotherapy.png";
import efSkillsCoachingImage from "@/assets/services/ef-skills-coaching.png";
import adhdInformedTherapyImage from "@/assets/services/adhd-informed-therapy.png";

export const SERVICE_COVER_IMAGES: Record<Service, string> = {
  [Service.ADHD_LEARNING_DISABILITIES_EVALUATIONS]:
    adhdLearningDisabilitiesImage,
  [Service.AUTISM_DIAGNOSTIC_EVALUATIONS]: autismDiagnosticEvaluationsImage,
  [Service.CONCUSSION_NEUROLOGICAL_COGNITIVE_DECLINE]:
    concussionNeurologicalImage,
  [Service.KINDERGARTEN_EARLY_ENTRANCE_ASSESSMENT]: kindergartenAssessmentImage,
  [Service.INDEPENDENT_EDUCATIONAL_EVALUATION]:
    independentEducationalEvaluationImage,
  [Service.PSYCHOTHERAPY]: psychotherapyImage,
  [Service.EF_SKILLS_COACHING]: efSkillsCoachingImage,
  [Service.ADHD_INFORMED_COUPLES_FAMILY_THERAPY]: adhdInformedTherapyImage,
  [Service.EMDR_THERAPY]: psychotherapyImage, // Using psychotherapy image as placeholder
  [Service.FOREST_BATHING]: psychotherapyImage, // Using psychotherapy image as placeholder
};

/**
 * Get the cover image for a service
 */
export function getServiceCoverImage(service: Service): string {
  return SERVICE_COVER_IMAGES[service] || "";
}
