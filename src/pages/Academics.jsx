import { ReactNode } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";

export default function StatsGridWithImage() {
  return (
    <>
    <Layout/>
    <Box bg={"gray.800"} position={"relative"}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={"linear(to-r, gray.800 10%, transparent)"}
          w={"full"}
          h={"full"}
        />
      </Flex>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.400"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"gray.500"}
              >
                Academics
              </Text>
              <Heading
                color={"white"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                Scholarships for Gen Z
              </Heading>
              <Text fontSize={"xl"} color={"gray.400"}>
                Here we have listed out the best scholarships for the next Gen Z prodigies. These Scholarships will surely help meritorious students way ahead.
              </Text>
              <Text fontSize={"xl"} color={"gray.200"}>
               Students belonging from low-income families find it difficult to pursue higher studies. Whether it is the payment of high-school education or completion of college, these students do not have it easy.
But with the changing time and the introduction of scholarship and grants from various educational institutes, accomplishing higher education has become possible. Even the government has initiated programs to help out such talented but financially weak aspirants. It is only needed to apply for these grants before the deadline and meet the required eligibility.
Here are the top 10 scholarship programmes that help school and college students chase their dreams:
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={"heading"}
                    fontSize={"3xl"}
                    color={"white"}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={"xl"} color={"gray.400"}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
    </>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "AICTE-Scholarship",
    content: (
      <>
       The All India Council of Technical Education (AICTE) ensures that students from financially weak backgrounds are able to pursue higher studies. In Fact, this initiative specifically provides economic support as well as much-needed facilities with this scheme. Moreover, there is not one but various grant programs introduced by the AICTE officially such as; J&K Scholarship scheme, Pragati Scholarship, Saksham Scholarship. 
  <StatsText><a href="https://www.aicte-india.org/" target="_blank">Apply.</a></StatsText>

      </>
    ),
  },
  {
    title: "K.C. Mahindra",
    content: (
      <>
      The All India K.C. Mahindra scholarship is meant for students who have passed class 10th and 12th or have successfully taken admission in diploma courses in government identified institutions. The scheme focuses on students with a low yearly family income and does not have enough money to pay for college expenses.
 

        <StatsText><a href="https://kcmet.org/what-we-do-Scholarship-Grants.aspx" target="_blank">Apply.</a></StatsText> 
      </>
    ),
  },
  {
    title: "Central Sector Scheme of Scholarship",
    content: (
      <>
      The Central Sector Scheme of Scholarship initiative backs students from poor backgrounds to easily pursue graduation and post graduation. Students with an annual family income that is below 6 lakhs are applicable for this grant and receive other great benefits. Thus, this scheme makes it easier for students to pursue higher education along with meeting daily expense needs.

        <StatsText><a href="http://mhrd.gov.in/central-sector-scheme-scholarship-college-and-university-students" target="_blank"> Apply here.</a></StatsText> 
      </>
    ),
  },
  {
    title: "Commonwealth Shared Scholarships",
    content: (
      <>
      The Commonwealth Shared Scholarship programme is especially meant for students belonging to developing countries. Indian students thus have an option to get their graduation and post graduation and post graduation degree from abroad.  This is an exciting opportunity for those aspirants who have a good and consistent academic performance and not have a huge family income.

        <StatsText><a href="http://cscuk.dfid.gov.uk/apply/" target="_blank"> Apply here.</a></StatsText> 
      </>
    ),
  },

  {
    title: "Sahu Jain Trust Inland Scholarship",
    content: (
      <>
      Choosing Sahu Jain Trust Inland Scholarship is one of the best decisions a class 12th pass out can make. This scheme creates better education facilities for children who are capable but cannot afford to continue with their college studies. In order to apply for this scholarship this year, submit the application form before 30th August 2018. 

        <StatsText><a href="http://sahujaintrust.timesofindia.com/" target="_blank"> Apply here.</a></StatsText> 
      </>
    ),
  },
  {
    title: "Cultural Talent Search Scholarship Scheme",
    content: (
      <>
      The CCRT scholarship ensures that students interested in artistic fields get proper educational facilities. Students with a monthly family income of 8,000 or less may avail for this programme. The age criterion is 10-14 years and children can rely on it to enhance their skills such as classical dancing, painting, drama, music, sculpture making etc.

        <StatsText><a href="https://drive.google.com/file/d/1tZQ70HY-IJ7yOPfysd1OmiER_QKgYbau/view" target="_blank"> Apply here.</a></StatsText> 
      </>
    ),
  },
  {
    title: "National Means Cum Merit Scholarship Scheme",
    content: (
      <>
      The National Means Cum Merit Scholarship Scheme is for students of class 9 and has secured a minimum score of 55% in class 8th final exams. Student’s family income should be 1.5 lakhs or below to successfully apply for this grant. The major goal of this programme is to lend support to students who find it hard to continue secondary studies.

        <StatsText><a href="https://scholarships.gov.in/" target="_blank"> Apply here.</a></StatsText> 
      </>
    ),
  },
  {
    title: "Tata Steel Twin Scholarship: Jyoti and Moodie",
    content: (
      <>
      The Tata Steel scholarship programme is for youngsters belonging from poor backgrounds. Its aim is to encourage students to pursue higher education in Engineering, Polytechnic, Medical, MCA, Microbiology, and Biotechnology. The students receive an amount of up to ₹ 15,000 in the form of financial assistance to complete their degrees.

        <StatsText><a href="http://www.tatasteel.com/" target="_blank"> Apply here.</a></StatsText> 
      </>
    ),
  },
  {
    title: "Special Assistance Programme by UGC",
    content: (
      <>
      SPA or Special Assistance Programme conducted by UGC focuses on providing financial support to research-based institutes and colleges. The scheme allows students from economically weak sections to carry out research and continue their research related studies without worrying about its cost.  This 3-level programme offers a reward amount of up to ₹3, 00,000.

       <StatsText><a href="https://www.ugc.ac.in/sap/" target="_blank"> Apply here.</a></StatsText> 
      </>
    ),
  },
  {
    title: "Internshala Trainings Young Achiever Scholarship",
    content: (
      <>
      The Internshala Young Achiever Scholarship focuses on providing online training to students in the areas of their interest. The courses covered include; Web Development, Digital Marketing, Java, Android App Development, etc. Students with an annual income level of 5 lakhs or less are eligible for this scheme.

       {/* <StatsText><a href="https://www.ugc.ac.in/sap/" target="_blank"> Apply here.</a></StatsText>  */}
      </>
    ),
  },

  {
    title: "Pre Matric Scholarship",
    content: (
      <>
     Vidyasaarathi is a technology-enabled initiative by NSDL e-Governance Infrastructure Limited (NSDL e-Gov) to bridge the gap in education finance in the country through an online platform. This initiative is supported by Tata Institute of Social Sciences (TISS) as a central trust for administering & managing scholarships under Vidyasaarathi
       <StatsText><a href="https://www.vidyasaarathi.co.in/Vidyasaarathi/" target="_blank"> Apply here.</a></StatsText> 
      </>
    ),
  },
  {
    title: "Scholarships for Minority Students",
    content: (
      <>
        Visit the links below to get more information about scholarships for minority students. <br/>    
       <StatsText><a href="https://minorityaffairs.gov.in/sites/default/files/Pre-matric_5.pdf" target="_blank">Minority Scholarship doc.</a></StatsText> <br/>
             <StatsText><a href="https://minorityaffairs.gov.in/sites/default/files/Pre-matric_5.pdf" target="_blank">Minority Scholarship site.</a></StatsText> 
      </>
    ),
  },
  {
    title: "Links to some more Scholarships",
    content: (
      <>
        Here are some links to more scholarships for our prodigies <br/>    
       <StatsText><a href="https://scholarships.gov.in/fresh/newstdRegfrmInstruction" target="_blank">1) NSP Scholarships for Top Class Education for Students with Disabilities 2021-22
.</a></StatsText> <br/>
             <StatsText><a href="https://www.biotecnika.org/2021/08/icar-iari-genetics-project-associate-junior-research-fellow-vacancy/" target="_blank">2) ICAR-IARI Division of Genetics Project Associateship/Junior Research Fellowship 2021-22.</a></StatsText> 
                  <br/> <StatsText><a href="https://www.nitk.ac.in/document/attachments/1595/Advt_VLAB_Recruitment_17July20_OnlineUpload.pdf" target="_blank">3) NITK Surathkal Junior/Senior Research Fellowship 2021-22
.</a></StatsText> <br/>
      </>
    ),
  },
];
