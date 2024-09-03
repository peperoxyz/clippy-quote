import Image from "next/image";
import ClipQuotesLogo from "../../assets/icons/cq-logo-light.svg";

export const CqLogoLight = () => {
	return <Image src={ClipQuotesLogo} alt="clip-quotes-logo-image" width={40} height={40} />;
};
