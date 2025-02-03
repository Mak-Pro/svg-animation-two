"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

interface Feature {
  claimNumber: number;
  claimTitle: string;
  claimDescription: string;
  embodimentTitle: string;
  embodimentDescription: string;
  useCase: string;
  image?: string;
}
export default function FeatureScroll() {
  const features: Feature[] = [
    {
      claimNumber: 1,
      claimTitle: "An All-in-One Patent Search System",
      claimDescription:
        "A patent search system, comprising:\n\n" +
        "    a) a custom search index of AI-enriched patent data; and\n\n" +
        "    b) an AI-native search platform configured to:\n" +
        "        - perform boolean search with custom query language and model-driven query generation,\n" +
        "        - apply model-driven ranking, and\n" +
        "        - map query components to document components.",
      embodimentTitle: "Embodiment 1: Precision Long-Form Invalidity Search",
      embodimentDescription:
        "Our multi-stage search process searches our index of 85+ million patents, finding the key prior art reference around 80% of the time in one go.",
      useCase: "Find art others miss, faster and more affordably.",
      image: "/images/feature1.png",
    },
    {
      claimNumber: 2,
      claimTitle: "Intelligent Boolean Search",
      claimDescription:
        "The search platform of claim 1, configured to perform a boolean search utilizing a custom query language and model-driven automatic query generation, enabling rapid search.",
      embodimentTitle: "Embodiment 2: Quick Search",
      embodimentDescription:
        "Get immediate results with our AI-powered boolean search. Our custom query language and automatic query generation models help you quickly find relevant documents.",
      useCase:
        "Conduct supplemental searching, ad-hoc searching, and portfolio analysis quickly and accurately.",
      image: "/images/feature2.png",
    },
    {
      claimNumber: 3,
      claimTitle: "Automated Claim Chart Generation",
      claimDescription:
        "The search system of claim 1, further comprising a module configured to generate invalidity claim charts mapping patent limitations to passages from the description or figures of patent publications.",
      embodimentTitle: "Embodiment 3: AI-Powered Claim Mapping",
      embodimentDescription:
        "Our system achieves high accuracy on selected passages and figures as validated by independent reviewers.",
      useCase:
        "Generate comprehensive claim charts automatically, with citations, for invalidity and infringement.",
      image: "/images/feature3.png",
    },
    {
      claimNumber: 4,
      claimTitle: "Reference Scoring Heatmaps",
      claimDescription:
        "The search system of claim 3, further comprising a module configured to generate heatmaps scoring reference documents across claim elements, providing visual insight into reference strength.",
      embodimentTitle: "Embodiment 4: Visual Coverage Analysis",
      embodimentDescription:
        "Instantly visualize how well each reference covers your claim elements with our intuitive heatmap system. Quickly identify the strongest references and potential gaps.",
      useCase:
        "Make informed decisions quickly with visual heatmaps showing reference coverage strength.",
      image: "/images/feature4.png",
    },
    {
      claimNumber: 5,
      claimTitle: "Product Infringement Analysis",
      claimDescription:
        "The search system of claim 1, configured to generate infringement claim charts by analyzing URLs and document sets to aggregate features into coherent products, then mapping patent limitations to product features.",
      embodimentTitle: "Embodiment 5: Automated Product Analysis",
      embodimentDescription:
        "Our system analyzes product documentation and web content to identify potential infringement, automatically mapping patent claims to product features.",
      useCase:
        "Monitor competitor products for potential infringement with automated analysis and mapping.",
      image: "/images/feature5.png",
    },
    {
      claimNumber: 6,
      claimTitle: "Freedom to Operate Search",
      claimDescription:
        "The search system of claim 1, configured to analyze product specifications and identify potentially blocking patent rights through comprehensive patent landscape analysis.",
      embodimentTitle: "Embodiment 6: FTO Risk Assessment",
      embodimentDescription:
        "Our system performs thorough patent landscape analysis to identify potential IP risks before product launch, helping you navigate the patent landscape safely.",
      useCase:
        "Identify potential IP risks early in product development to avoid costly conflicts.",
      image: "/images/feature6.png",
    },
    {
      claimNumber: 7,
      claimTitle: "Automated Report Generation",
      claimDescription:
        "The search system of claim 1, configured to generate invalidity and infringement reports, suggesting combinations with weak support and identifying potential infringement risks.",
      embodimentTitle: "Embodiment 6: Comprehensive IP Reports",
      embodimentDescription:
        "Generate detailed reports highlighting potential invalidity arguments and infringement risks, including freedom to operate and patentability analyses.",
      useCase:
        "Make informed IP decisions with comprehensive automated reports on invalidity and infringement.",
      image: "/images/feature6.png",
    },
    {
      claimNumber: 8,
      claimTitle: "Adaptive Learning System",
      claimDescription:
        "The search system of claim 1, wherein the system improves search accuracy and efficiency through continuous learning from user interactions and proprietary evaluation sets.",
      embodimentTitle: "Embodiment 7: Self-Improving Platform",
      embodimentDescription:
        "Our platform learns from every search, continuously improving its accuracy and efficiency. The more you use it, the better it gets at finding relevant prior art.",
      useCase:
        "Benefit from a system that grows smarter with every search, delivering increasingly precise results.",
      image: "/images/feature7.png",
    },
    {
      claimNumber: 9,
      claimTitle: "Human-AI Collaboration",
      claimDescription:
        "The search system of claim 1, wherein results may be reviewed and refined by human experts, creating a synergistic workflow between AI and expert reviewers.",
      embodimentTitle: "Embodiment 8: Expert Review Integration",
      embodimentDescription:
        "Seamlessly combine AI-powered search with human expertise. Patent agents can quickly review AI-generated heatmaps and charts to confirm coverage of limitations.",
      useCase:
        "Leverage the power of AI while maintaining human oversight for optimal results.",
      image: "/images/feature8.png",
    },
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // const [featurePlayer, setFeaturePlayer] = useState<any>(null);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "/scripts/spine-player.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   script.onload = () => {
  //     const spine = (window as any).spine;

  //     // grid animation
  //     if (spine) {
  //       const gridPlayer = new spine.SpinePlayer("feature-1", {
  //         skeleton: "/data/animations/Claim.json",
  //         atlas: "/data/animations/Claim.atlas",
  //         animation: "animation",
  //         showControls: false,
  //         showLoading: false,
  //         alpha: true,
  //         success: (player: any) => {
  //           setFeaturePlayer(player);
  //         },
  //       });
  //     }
  //   };

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div className="min-h-screen snap-y snap-mandatory overflow-y-scroll">
      {/* Custom first feature section */}
      <section className="h-screen snap-start flex items-center justify-center bg-white px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Claim {features[0].claimNumber}: {features[0].claimTitle}
            </h2>
            <div className="text-gray-600 mb-4 font-mono">
              <div>A patent search system, comprising:</div>
              <div className="mt-4 ml-8">
                a) a custom search index of AI-enriched patent data; and
              </div>
              <div className="mt-4 ml-8">
                b) an AI-native search platform configured to:
                <div className="ml-8 mt-2">
                  perform boolean search with custom query language and
                  model-driven query generation,
                </div>
                <div className="ml-8">apply model-driven ranking, and</div>
                <div className="ml-8">
                  map query components to document components.
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {features[0].embodimentTitle}
            </h3>
            <p className="text-gray-600 mb-4">
              {features[0].embodimentDescription}
            </p>
            <p className="text-gray-700 italic">{features[0].useCase}</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="min-w-[520px] min-h-[520px] max-w-[520px] max-h-[520px] h-[520px] w-[520px] [&>*]:h-[100%]">
              <Player
                autoplay
                loop
                src="/data/animations/scene1.json"
                style={{ height: "100%", width: "100%" }}
              ></Player>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining features */}
      {features.slice(1).map((feature, index) => (
        <section
          key={index + 1}
          className="h-screen snap-start flex items-center justify-center bg-white px-6"
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Claim {feature.claimNumber}: {feature.claimTitle}
              </h2>
              <p className="text-gray-600 mb-4 whitespace-pre-line font-mono">
                {feature.claimDescription}
              </p>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {feature.embodimentTitle}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.embodimentDescription}
              </p>
              <p className="text-gray-700 italic">{feature.useCase}</p>
            </div>
            {/* Right side - Image */}
            <div className="flex items-center justify-center">
              {feature.image && (
                <img
                  src={feature.image}
                  alt={feature.embodimentTitle}
                  className="w-full h-auto"
                />
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
