import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Variabel untuk animasi dengan Framer Motion
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);
const MotionImg = motion(Image);

export default MotionBox;
export { MotionText, MotionFlex, MotionButton, MotionImg };

const containerVariant = {
    visible: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.3,
        }
    }
};

const itemVariantY = {
    hidden: { y: 45, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 140,
        }
    }
};

export { containerVariant, itemVariantY };
