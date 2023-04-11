import * as React from "react";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import ModalVideo from "react-modal-video";
import 'node_modules/react-modal-video/scss/modal-video.scss';
export default function HomeBannerModal(props) {
  const { handleOpen, open } = props;

  return (
    <div>
      			<ModalVideo channel='vimeo' autoplay={true} isOpen={open} videoId="816417893"  onClose={() => handleOpen()} className="modalVideo" />
      {/* <Modal open={open} onClose={handleOpen}>
        <>
          <div className="mt-[1%] md:mt-[3%]">
            <motion.div
              animate={{ y: 100 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="w-[85%] flex flex-row items-end justify-end mx-auto my-0 md:w-[74%]" onClick={()=>handleOpen()}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <AiOutlineClose className="text-[36px] bg-primary-brown text-primary-orange rounded-full p-2" />
                </motion.button>
              </div>
              <div className="w-[70%] mx-auto my-0">
              <iframe  src="https://player.vimeo.com/video/816417893?h=4d02b597ba"
               title="Hyring"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               className="w-full mx-auto my-0"
               width="1400"
               height="480" frameborder="0" allowfullscreen></iframe>
                <iframe
                 src="https://player.vimeo.com/video/816417893?h=4d02b597ba"
                  title="Hyring"
                  width="1020"
                  height="480"
                  frameborder="0" 
                  allowfullscreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="w-full mx-auto my-0"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </>
      </Modal> */}
    </div>
  );
}
