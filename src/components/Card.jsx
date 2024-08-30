// import React from "react";
// import { FaRegFileAlt } from "react-icons/fa";
// import { MdOutlineFileDownload } from "react-icons/md";
// import { IoTrashBinOutline } from "react-icons/io5";
// import { motion } from "framer-motion";

// function Card({ data, reference, onDelete }) {
//   return (
//     <motion.div
//       drag
//       dragConstraints={reference}
//       whileDrag={{ scale: 1.2 }}
//       dragElastic={0.2}
//       dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
//       className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
//     >
//       <FaRegFileAlt />
//       <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>

//       {/* Footer */}
//       <div className="footer absolute bottom-0 w-full left-0">
//         <div className="flex items-center justify-between mb-3 py-3 px-8">
//           <h5>{data.filesize}</h5>
//           <div className="flex items-center space-x-2">
//             <IoTrashBinOutline
//               onClick={() => onDelete(data)}
//               className="text-red-600 cursor-pointer hover:text-red-800"
//               title="Delete"
//               size={20} // Ensuring the icon is large enough to be clickable
//             />
           
//           </div>
//         </div>
//         {data.tag.isOpen && (
//           <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
//             <h3 className="text-sm font-semibold"><a href={data.tag.tagTitle}>{data.tag.tagTitle}</a></h3>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// export default Card;
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference, onDelete }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold line-clamp-5">{data.desc}</p>

      {/* Footer */}
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-3 py-3 px-8">
          <h5>{data.filesize}</h5>
          <div className="flex items-center space-x-2">
            <IoTrashBinOutline
              onClick={() => onDelete(data)}
              className="text-red-600 cursor-pointer hover:text-red-800"
              title="Delete"
              size={20} // Ensuring the icon is large enough to be clickable
            />
          </div>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold"><a href={data.tag.tagTitle}>{data.tag.tagTitle}</a></h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
