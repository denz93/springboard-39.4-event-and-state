import { useMemo, useState} from "react";
import ColorBox from "./ColorBox";

const sampleColors = [
  'maroon', 'darkgreen', 'navy', 'teal',
  'olive', 'purple', 'darkslateblue', 'indigo',
  'darkolivegreen', 'saddlebrown', 'darkslategray', 'dimgray',
  'midnightblue', 'firebrick', 'darkred', 'darkmagenta'
]
function shuffle(array) {
  const newArray = [...array];
  let currentIndex = array.length - 1;
  while (currentIndex > 0) {
    const randomIndex = Math.floor(Math.random() * array.length-1);
    [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
    currentIndex--;
  }
  return newArray;
}

/**
 * @typedef {Object} ColorBoxSeriesProps
 * @property {number} numBoxes
 * @property {string[]} possibleColors
 * 
 * @param {ColorBoxSeriesProps} props 
 *  
 * @returns 
 */
export default function ColorBoxSeries({
  // eslint-disable-next-line react/prop-types
  numBoxes = 16,
  // eslint-disable-next-line react/prop-types
  possibleColors = sampleColors
}) {
  const randomColors = useMemo(() => shuffle(possibleColors), [possibleColors])
  const [colors, setColors] = useState(new Array(numBoxes).fill(1).map((_, idx) => randomColors[idx%randomColors.length]));
  const [selectedBox, setSelectedBox] = useState(-1);

  return <div className='flex justify-center mt-5 flex-wrap gap-2'>
    {colors.map((color, idx) => <ColorBox key={idx} color={color} isChanged={idx === selectedBox} onColorChange={() => {
      colors[idx] = sampleColors[Math.floor(Math.random() * sampleColors.length-1)];
      setColors([...colors]);
      setSelectedBox(idx);
    }}/>) }
</div>
}