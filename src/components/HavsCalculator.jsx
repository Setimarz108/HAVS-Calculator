import React, { useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import {
  Box,
  Button,
  Input,
  Select,
  Text,
  HStack,
  Flex,
  flexbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { LanguageIcon } from "@heroicons/react/24/solid";

const messages = {
  en: {
    title: "HAVS Calculator",
    dailyDurationLabel: "Daily Duration (hours):",
    vibrationMagnitudeLabel: "Vibration Magnitude (m/s²):",
    calculateButtonLabel: "Calculate",
    resultLabel: "The HAVS risk is: ",
  },
  de: {
    title: "HAVS Rechner",
    dailyDurationLabel: "Tägliche Dauer (Stunden):",
    vibrationMagnitudeLabel: "Vibrationsstärke (m/s²):",
    calculateButtonLabel: "Berechnen",
    resultLabel: "Das HAVS-Risiko beträgt: ",
  },
  es: {
    title: "Calculadora de HAVS",
    dailyDurationLabel: "Duración diaria (horas):",
    vibrationMagnitudeLabel: "Magnitud de vibración (m/s²):",
    calculateButtonLabel: "Calcular",
    resultLabel: "El riesgo de HAVS es: ",
  },
};

const HavsCalculator = () => {
  const [dailyDuration, setDailyDuration] = useState(0);
  const [vibrationMagnitude, setVibrationMagnitude] = useState(0);
  const [result, setResult] = useState(0);
  const [locale, setLocale] = useState("en");

  const calculateResult = () => {
    const a = dailyDuration * vibrationMagnitude;
    const b = Math.pow(vibrationMagnitude, 1.5);
    const c = Math.pow(10, -6);
    const d = a * b * c * 2;

    setResult(d.toFixed(2));
  };

  const handleChangeLocale = (e) => {
    setLocale(e.target.value);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Flex>
        <div className="Language">
          <LanguageIcon style={{ width: "32px" }} />
          <Select value={locale} onChange={handleChangeLocale}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
          </Select>
        </div>
      </Flex>
      <Flex direction={"row"} id="calculatorBorder">
        <Box maxW="md" mx="auto" my={"10%"} >
          <Text fontSize="xl" fontWeight="bold" mb="10" mt={-10} align={"center"}>
            <FormattedMessage id="title" />
          </Text>
          <HStack spacing="40" mb={"80px"}>
            <Box>
              <h6 mb="3">
                <FormattedMessage id="dailyDurationLabel" />
              </h6>

              <NumberInput
                variant="flushed"
                placeholder="enter duration"
                size="md"
                type="number"
                value={dailyDuration}
                onChange={(value) => setDailyDuration(value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box>
              <h5 mb="2">
                <FormattedMessage id="vibrationMagnitudeLabel" />
              </h5>
              <NumberInput
                variant="flushed"
                placeholder="enter duration"
                size="md"
                type="number"
                value={vibrationMagnitude}
                onChange={(value) => setVibrationMagnitude(value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
          </HStack>

          <HStack my={"30px"}>
            <Flex justifyContent={"space-around"}>
              <Button bg="teal.200" onClick={calculateResult} mx={"0px"} mr={"10px"}>
                <FormattedMessage id="calculateButtonLabel" />
              </Button>

              <h4 style={{marginLeft:"12rem"}}>
                <FormattedMessage id="resultLabel" />
                {result}
              </h4>
            </Flex>
          </HStack>
        </Box>
      </Flex>
    </IntlProvider>
  );
};

export default HavsCalculator;
