function Tag({ label, className, onClose }) {
  return (
    <div
      className={`px-[15px] py-[12px] bg-[#E8DECF] rounded-[4px] flex items-center mr-[14px] ${className}`}
    >
      <p className="text-[16px] font-[400] mr-[8px]">{label}</p>
      <p className="cursor-pointer" onClick={()=>{onClose(label)}}>X</p>
      {/* TODO: Fix close icon */}
      {/* <img className="cursor-pointer" src="../assets/closeIcon.png" alt="X" onClick={()=>{onClose(label)}}/> */}
    </div>
  );
}

export default Tag;
