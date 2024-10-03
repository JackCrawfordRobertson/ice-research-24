import {Grid, Box, Heading, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";

const MotionBox = motion(Box);

const ThreeColumnGrid = () => {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
    };

    return (
        <MotionBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            padding="0px"
        >
            <Grid templateColumns="repeat(3, 1fr)" gap={30} height="100%" w="100%">
                {/* Increased gap between grid items */}
                <MotionBox
                    variants={itemVariants}
                    backgroundColor="white"
                    p={5}
                    boxShadow="lg"
                    borderRadius="md"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    borderBottom="1px solid #ccc"
                >
                    <Heading as="h2" size="md" textTransform="uppercase" pt={0} pb={0} mt={0} mb={0}>
                        1.Sustainability
                    </Heading>
                    <Text>
                        A key finding is that 57.1% of respondents recognise the need for more sustainability learning,
                        yet it remains a lower priority during event planning, with cost management being the top focus
                        for 45% of respondents. The gap between awareness and action arises from short-term demands
                        overshadowing long-term goals. The challenge lies in balancing cost and sustainability as larger
                        corporations push for net-zero targets.
                    </Text>
                </MotionBox>

                <MotionBox
                    variants={itemVariants}
                    backgroundColor="white"
                    p={5}
                    boxShadow="lg"
                    borderRadius="md"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    borderBottom="1px solid #ccc"
                >
                    <Heading as="h2" size="md" textTransform="uppercase" pt={0} pb={0} mt={0} mb={0}>
                        2.Satisfaction
                    </Heading>
                    <Text>
                        Attendee satisfaction is a top-three priority for 63% of respondents. Event success is gauged by
                        attendee experience, including content and networking. However, planners face tension between
                        providing international travel to enhance experience and sustainability goals, as travel remains
                        a key aspect despite environmental concerns.
                    </Text>
                </MotionBox>

                <MotionBox
                    variants={itemVariants}
                    backgroundColor="transparent"
                    p={5}
                    boxShadow="lg"
                    borderRadius="md"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    borderBottom="1px solid #ccc"
                >
                    <Heading as="h2" size="md" textTransform="uppercase" pt={0} pb={0} mt={0} mb={0}>
                        3.Cost Management
                    </Heading>
                    <Text>
                        Cost control is critical for 75% of planners, with rising costs pressuring budgets. Alongside
                        managing costs, planners focus on ROI, which is key for 60% of respondents. ROI involves
                        financial returns and value for stakeholders, such as lead generation and stakeholder
                        satisfaction, indicating a holistic view of event success.
                    </Text>
                </MotionBox>
                <MotionBox
                    variants={itemVariants}
                    backgroundColor="transparent"
                    p={5}
                    boxShadow="lg"
                    borderRadius="md"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    borderBottom="1px solid #ccc"
                >
                    <Heading as="h2" size="md" textTransform="uppercase" pt={0} pb={0} mt={0} mb={0}>
                        4.Technology
                    </Heading>
                    <Text>
                        Interest in using technology to improve planning efficiency is growing, yet only 35% use AI for
                        processes like personalisation or logistics. A divide exists between strategists, who embrace
                        innovation, and deliverers, who focus on operational efficiency. The industry still struggles to
                        integrate advanced technology into day-to-day execution.
                    </Text>
                </MotionBox>

                <MotionBox
                    variants={itemVariants}
                    backgroundColor="transparent"
                    p={5}
                    boxShadow="lg"
                    borderRadius="md"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    borderBottom="1px solid #ccc"
                >
                    <Heading as="h2" size="md" textTransform="uppercase" pt={0} pb={0} mt={0} mb={0}>
                        5.Priorities
                    </Heading>
                    <Text>
                        Event strategists focus on stakeholder satisfaction, cost control, and long-term outcomes, while
                        deliverers prioritise attendee satisfaction, logistics, and efficiency. This divide reflects
                        differing views on success, with strategists considering sustainability, but deliverers facing
                        challenges implementing such practices due to logistical constraints.
                    </Text>
                </MotionBox>

                <MotionBox
                    variants={itemVariants}
                    backgroundColor="transparent"
                    p={5}
                    boxShadow="lg"
                    borderRadius="md"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    borderBottom="1px solid #ccc"
                >
                    <Heading as="h2" size="md" textTransform="uppercase" pt={0} pb={0} mt={0} mb={0}>
                        6.Future Trends
                    </Heading>
                    <Text>
                        Hybrid events, combining in-person and virtual elements, are a key trend, noted by 52% of
                        respondents for their flexibility and potential to reduce travel. The integration of AI and data
                        analysis is another important trend, enhancing personalisation and reducing waste, although only
                        10% are using AI to track carbon footprints.
                    </Text>
                </MotionBox>

                <MotionBox
                    variants={itemVariants}
                    backgroundColor="transparent"
                    p={5}
                    boxShadow="lg"
                    borderRadius="md"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    borderBottom="1px solid #ccc"
                >
                    <Heading as="h2" size="md" textTransform="uppercase" pt={0} pb={0} mt={0} mb={0}>
                        7.Conclusion
                    </Heading>
                    <Text>
                        ICE 2024 research highlights that cost management, attendee satisfaction, and ROI take
                        precedence over sustainability. As net-zero targets approach, balancing these priorities will be
                        essential. AI and data analysis offer potential for streamlining events and improving
                        experiences, but wider adoption remains a challenge across both strategic and logistical
                        aspects.
                    </Text>
                </MotionBox>

                {/* Repeat the structure for other columns */}
            </Grid>
        </MotionBox>
    );
};

export default ThreeColumnGrid;
