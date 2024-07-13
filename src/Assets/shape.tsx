import shapeWave from '../Assets/shape wave.png';
import shapeTangga from '../Assets/Shape Tangga.png'
import { Box, BoxProps } from '@chakra-ui/react';

const shapeGrid: React.FC<BoxProps> = (props) => {
    const boxes = [];
    const totalBoxes = 80;

    for (let i = 0; i < totalBoxes; i++) {
        boxes.push(<Box key={i} w={1} h={1} borderRadius="50%" bg="main" />);
    }

    return (
        <Box w={28} display="flex" flexWrap="wrap" gap={2} justifyContent="center" {...props}>
            {boxes}
        </Box>
    );
};

const shapeElips: React.FC<BoxProps> = (props) => {

    return (
        <Box display={'flex'} justifyContent="center" flexDirection={'column'} gap={1} {...props}>
            {[1, 2, 3, 4].map(item => (
                <Box key={item} w={4} h={4} borderRadius="50%" border={'2px'} borderColor="primary.500" />
            ))}
        </Box>
    );
};

export default {
    shapeWave,
    shapeTangga,
    shapeGrid,
    shapeElips
}