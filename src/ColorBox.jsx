
/**
 * @typedef {Object} ColorBoxProps
 * @property {string} color
 * @property {() => void|undefined} onColorChange
 * @property {boolean} isChanged
 * 
 * @param {ColorBoxProps} props 
 * @returns 
 */
export default function ColorBox({
  // eslint-disable-next-line react/prop-types
  color,
  // eslint-disable-next-line react/prop-types
  onColorChange,
  // eslint-disable-next-line react/prop-types
  isChanged,
}) {
   
  return <div className="w-20 flex flex-col gap-2">
    <div className="w-full h-20 flex justify-center items-center text-sm text-slate-300" style={{backgroundColor: color}}>{isChanged ? 'Changed' : ''}</div>
    <button className="w-full px-2 py-2 hover:bg-slate-500 border border-slate-500" onClick={() => onColorChange()}>Change</button>
  </div>
}
