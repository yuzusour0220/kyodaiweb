"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
  Grid,
  GridItem,
  HStack,
  Flex,
  Link,
} from "@chakra-ui/react";
import axios from "axios";

interface ScheduleFile {
  id: number;
  file_url: string;
  file: string;
  name: string;
  uploaded_at: string;
}
interface Schedule {
  event_name: string;
  result: string;
  start: string;
  end: string;
  photo: string;
  files: ScheduleFile[];
}

const sortByDate = (schedules: Schedule[]): Schedule[] => {
  return schedules.sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );
};

const groupByMonth = (schedules: Schedule[]): Record<string, Schedule[]> => {
  return schedules.reduce((acc, schedule) => {
    const month = new Date(schedule.start).getMonth() + 1;
    const monthKey = month.toString().padStart(2, "0");
    if (!acc[monthKey]) {
      acc[monthKey] = [];
    }
    acc[monthKey].push(schedule);
    return acc;
  }, {} as Record<string, Schedule[]>);
};

const ScheduleCard: React.FC<{
  schedule: Schedule;
  onOpen: (schedule: Schedule) => void;
}> = ({ schedule, onOpen }) => (
  <Card key={`${schedule.event_name}-${schedule.start}`} p={4} mb={3}>
    <Grid templateColumns="1fr 1fr 1fr" gap={4} alignItems="center">
      <GridItem>
        <Text fontWeight="bold">{schedule.event_name}</Text>
      </GridItem>
      <GridItem>
        <Center>
          <Text>
            日程:{" "}
            {schedule.start === schedule.end
              ? new Date(schedule.start).toLocaleDateString()
              : `${new Date(schedule.start).toLocaleDateString()} - ${new Date(
                  schedule.end
                ).toLocaleDateString()}`}
          </Text>
        </Center>
      </GridItem>
      <GridItem justifySelf="end">
        <Button
          onClick={() => onOpen(schedule)}
          isDisabled={!schedule.photo}
          colorScheme={schedule.photo ? "blue" : "gray"}
        >
          Result
        </Button>
      </GridItem>
    </Grid>
  </Card>
);

const ScheduleModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  schedule: Schedule;
}> = ({ isOpen, onClose, schedule }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="full">
    <ModalOverlay />
    <ModalContent width="80%" height="auto" maxWidth="1200px" margin="auto">
      <ModalHeader>{schedule.event_name}</ModalHeader>
      <ModalCloseButton />
      <ModalBody paddingBottom={4}>
        <VStack spacing={4} align="stretch">
          <Box>
            <Text fontWeight="bold" marginBottom={2}>
              日程:
            </Text>
            <Text marginBottom={4}>
              {schedule.start === schedule.end
                ? new Date(schedule.start).toLocaleDateString()
                : `${new Date(schedule.start).toLocaleDateString()} - ${new Date(schedule.end).toLocaleDateString()}`}
            </Text>
          </Box>

          <Flex direction={{ base: "column", md: "row" }} gap={4}>
            {schedule.result && (
              <Box flex="1">
                <Text fontWeight="bold" marginBottom={2}>
                  結果:
                </Text>
                <Text whiteSpace="pre-wrap">
                  {schedule.result}
                </Text>
              </Box>
            )}
            <Box flex="1">
            {schedule.photo && (
              <Box flex="1">
                
                
                <Image
                  src={schedule.photo}
                  alt={schedule.event_name}
                  width="100%"
                  maxHeight="400px"
                  objectFit="contain"
                />
              </Box>
            )}
            {schedule.files && schedule.files.length > 0 && (
            <Box marginTop={6}>
              <Text fontWeight="bold" marginBottom={2}>
                リザルトファイル:
              </Text>
              <VStack align="start" spacing={2}>
                {schedule.files.map((file) => (
                  <Link key={file.id} href={file.file_url} isExternal color="blue.500">
                    {file.name}
                  </Link>
                ))}
              </VStack>
            </Box>
          )}
          </Box>
          </Flex>

          
        </VStack>
      </ModalBody>
    </ModalContent>
  </Modal>
);
const Result: React.FC<{ params: { year: string } }> = ({ params }) => {
  const [groupedSchedules, setGroupedSchedules] = useState<
    Record<string, Schedule[]>
  >({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule>({
    event_name: "",
    result: "",
    start: "",
    end: "",
    photo: "",
    files: [],
  });

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/schedule/`)
      .then((res) => {
        const filteredSchedules = res.data.filter(
          (schedule: Schedule) =>
            new Date(schedule.start).getFullYear() === parseInt(params.year, 10)
        );
        const sortedSchedules = sortByDate(filteredSchedules);
        const grouped = groupByMonth(sortedSchedules);
        setGroupedSchedules(grouped);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [params.year]);

  const handleOpenModal = (schedule: Schedule) => {
    setSelectedSchedule(schedule);
    onOpen();
  };

  return (
    <>
      <Center margin={3}>
        <Heading size="xl">{params.year} Race</Heading>
      </Center>
      <Divider marginBottom={3} color="gray" />
      <VStack
        spacing={8}
        align="stretch"
        width="100%"
        maxWidth="1000px"
        margin="auto"
        px={4}
      >
        {Object.entries(groupedSchedules)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([month, schedulesInMonth]) => (
            <Box key={month}>
              <Center>
                <Heading as="h2" size="lg" mb={4}>
                  {parseInt(month, 10).toString()}月
                </Heading>
              </Center>
              <VStack spacing={4} align="stretch">
                {schedulesInMonth.map((schedule) => (
                  <ScheduleCard
                    key={schedule.event_name}
                    schedule={schedule}
                    onOpen={handleOpenModal}
                  />
                ))}
              </VStack>
            </Box>
          ))}
      </VStack>
      <ScheduleModal
        isOpen={isOpen}
        onClose={onClose}
        schedule={selectedSchedule}
      />
       
    </>
  );
};

export default Result;
