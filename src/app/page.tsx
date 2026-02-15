"use client"

import Hero from "@/components/main/Hero";
import Section1 from "@/components/main/Section1";
import Section2 from "@/components/main/Section2";
import Section4 from "@/components/main/Section4";
import Section5 from "@/components/main/Section5";
import Section6 from "@/components/main/Section6";
import Section10 from "@/components/main/Section10";
import Articles from "@/components/main/Articles";
import {Dispatch, SetStateAction, useState} from "react";
import {X} from "lucide-react";
import Image from "next/image";


export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
      <main className="bg-black overflow-hidden">
        <a href="https://wa.me/971528072627" target="_blank" className="fixed bottom-10 right-10 z-20 bg-gold-gradient p-2 rounded-full max-h-12 max-w-12" style={{
          boxSizing: "border-box",
          boxShadow: "-3px -3px 17.1px rgba(210, 173, 117, 0.3), 3px 3px 10.2px rgba(210, 173, 117, 0.3)",
        }}>
          <Image src="/svg/whatsapp.svg" width={44} height={44} alt={"Whatsapp Icon"} />
        </a>
        <Hero setModalVisible={setModalVisible}/>
        <Section1 />
        <Section2 />
        <Section4 />
          <div className="relative pb-10 max-lg:hidden" style={{
              background: "linear-gradient(180deg, rgba(46, 42, 38, 0) 0%, #2E2A26 100%)",
              backgroundImage: "url('/img/img_19.png')"
          }}>
              <Section5/>
              <Section6/>
          </div>
          <div className="relative pb-10 lg:hidden">
              <Section5/>
              <Section6/>
          </div>

          {/*<Section7 />*/}
          {/*<Section8 />*/}
          {/*<Section9 />*/}

          <div className="pb-10">
              <Section10/>
              <Articles/>
          </div>
          {/*<Section11 />*/}
          {/*<Section11/>*/}
          {/*<Section12 />*/}

        {modalVisible && (
          <VideoModal setModalVisible={setModalVisible} />
        )}

      </main>
  );
}

function VideoModal ({setModalVisible}: {  setModalVisible: Dispatch<SetStateAction<boolean>>}) {
    return (
        <div className="fixed inset-0 h-screen w-screen bg-black/40 backdrop-blur-sm z-100">
            <div className="flex mx-auto w-11/12 justify-center h-full items-center">
                <div className="w-[800px] relative">
                    <div className="absolute top-5 right-5 cursor-pointer z-10" onClick={() => setModalVisible(false)}>
                        <X/>
                    </div>
                    <div style={{position: "relative", paddingTop: "56.25%"}}>
                        <iframe
                            src="https://fast.wistia.net/embed/iframe/k920ioyuxg"
                            title="Video"
                            allow="autoplay; fullscreen"
                            className="!-left-1 !-top-1"
                            style={{
                                position: "absolute",
                                border: "none",
                                top: 0,
                                left: 0,
                                width: "101%",
                                height: "101%",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
