import * as React from "react";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
export default function HomeBannerModal(props) {
  const { handleOpen, open } = props;

  return (
    <div>
      <Modal open={open} onClose={handleOpen}>
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
                <iframe
                  src="https://www.youtube.com/embed/si4Ak78y6Kg?controls=0&autoplay=1"
                  title="Hyring"
                  width="854"
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
      </Modal>
    </div>
  );
}
