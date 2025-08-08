// utils/icon-map.ts
import {
  BiCodeBlock, BiLogoShopify, BiLogoFacebookCircle, BiLogoYoutube,} from "react-icons/bi";
import { DiWordpress, DiApple, DiDotnet,} from "react-icons/di";
import { FaShopify, FaPython,  FaWordpress, FaLaravel, FaMagento,  FaAndroid, FaApple,  FaNodeJs, FaNode, FaAngular,} from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { AiFillAndroid } from "react-icons/ai";
import { BsAndroid, BsBarChartFill } from "react-icons/bs";
import { TbSpeakerphone } from "react-icons/tb";
import { SiWoocommerce as SiWoo } from "react-icons/si";
import * as LucideIcons from 'lucide-react';
import { IconType } from "react-icons";
import {  SiFlutter, SiNextdotjs, SiWebflow, SiStrapi, } from 'react-icons/si';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";
import { TbBriefcase } from "react-icons/tb";


export const iconMap: Record<string, IconType> = {
  BiCodeBlock,
  BiLogoShopify,
  BiLogoFacebookCircle,
  BiLogoYoutube,
  DiWordpress,
  DiApple,
  DiDotnet,
  FaNode,
  FaAngular,
  HiShoppingBag,
  AiFillAndroid,
  BsAndroid,
  BsBarChartFill,
  TbSpeakerphone,
  SiWoo,
  FaShopify,
  FaPython,
  FaWordpress,
  FaMagento,
  FaAndroid,
  FaApple,
  FaNodeJs,
  SiFlutter,
  SiNextdotjs,
  SiWebflow,
  SiStrapi,
  FaLaravel,
  MdEmail,
  MdPhone,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FiPhone,
  LuMailOpen,
  TbBriefcase
};


export function getLucideIconByName(name: string) {
  return LucideIcons[name as keyof typeof LucideIcons] || null;
}


