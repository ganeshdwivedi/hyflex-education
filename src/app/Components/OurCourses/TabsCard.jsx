"use client"
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { JackInTheBox } from "react-awesome-reveal";

export default function TabsCard() {
    let tabs = [
        {
            id: "Spanish",
            Country: 'https://s3-alpha-sig.figma.com/img/f200/eb37/dfc5e968f124acf7fda80bb0721d2271?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZkXta~L1n-GOsIQEO321yuLStpdZavShdj9zFEYqxZ5ymAarxQXPRuCbH2uagrACaXE5MbUhScKWZp7CGBZdLC-8042vb~KCY0zf4ONBARW-9dhcKitx3b2Wug7UAm5FVEzdodw-Q3JPV589UHN~KIkBT0aE84meAFVaLRRwjSXZ97YVhs~V1WYfK0YColtWVRisV809GXKP8snmLOHDuvq3AWSfTcjMFM3g7I8xj87iNsc8L43yQK0-d0~33tuJXv1GHP-4B2cBT6ohbjYbLN2kCds0v3U5H5UzIVx8RBomyv6F9DSz5V-Q-xvVpM9T6DFT6AWSmnBUyfS9eFAyw__',
            label: "Spanish",
            content: [{
                About: 'Master Spanish step by step, from A1 to A2. Elevate yourlanguage skills with our tailored, level- wise approach.'
            }, {
                About: 'Elevate your Spanish from B1 to B2 with precision and depth.Fluent communication awaits!'
            }, {
                About: 'Attain language excellence from C1 to C2. Dive deep into advanced Spanish for superior fluency and cultural mastery'
            }]
        },
        {
            id: "English & IELTS",
            Country: 'https://s3-alpha-sig.figma.com/img/a0b1/0c25/a95fec4279bb5aef45b584b1f8f5760d?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZqt4TQVIeWU9byz86hF34KKrurIclVrWoIgTXkuuEiOE-JatPXyyyc5K2R-TwT2aLuF4KEDYAWslvHDsQcQ5UXDm9GRpIIZqpcS1oWVlpnUhkceu4vnOnrmeOiIRyOq4s8kKGdXSZ1SZ~eZXpV6GNlmx~n4bDGuoo5-WT~4MIOP6oCByI59NPYRnGWNIoggtgsP4Ihd6Q-DbNGCKp4a-42AS8evKBQxRkD3I3DxTdLLQGFqRaoa4VabAN3rcl8iwGlIhN7iU6QX6lmqJr1Xt8a6oBS7JFrjTCe6XdgQfrO8TNaQGjbZfXWaBa-YyQqsv6DRCDHbsiIVw3aeIo~HTA__',
            label: "English & IELTS",
            content: [{
                About: 'Master English step by step, from A1 to A2. Elevate yourlanguage skills with our tailored, level- wise approach.'
            }, {
                About: 'Elevate your English from B1 to B2 with precision and depth.Fluent communication awaits!'
            }, {
                About: 'Attain language excellence from C1 to C2. Dive deep into advanced English for superior fluency and cultural mastery'
            }]
        },
        {
            id: "German",
            label: "German",
            Country: 'https://s3-alpha-sig.figma.com/img/ba6a/3aa1/5034fa03078989cd3582ac476bbfc980?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFz-91VY6E5fwYprOaYGK~GgzLG5EdANtwO5boGt3VCaHfo2oSID5XT0cwMTQFQWT9vFZU0ZgPaC74xUB-ewcv2~CM8VOUVDy3TLvbr6SN1MuxqX9GhV4iSJrYEK19L1uyP2YTJ33gOeojDQa1dV8u8ET6yjkeWTJX4mglftc47ec3gzKfG0T6~DTmSweud~iCaDn9oglBzKW~SaQAq5ltQhqCVDPjcoI88NvGsu-EsXwBeE91nTo6Rex67OX0EiSH-NXWhJ4A4Vzuw5lQpqwWv3pSlWPvLsalPlx90LRc~6rXLAUkf9piufMY-mJqA9nj~9Pgp5bm6PqR0g0zgw1Q__',
            content: [{
                About: 'Master German step by step, from A1 to A2. Elevate yourlanguage skills with our tailored, level- wise approach.'
            }, {
                About: 'Elevate your German from B1 to B2 with precision and depth.Fluent communication awaits!'
            }, {
                About: 'Attain language excellence from C1 to C2. Dive deep into advanced German for superior fluency and cultural mastery'
            }]
        },
        {
            id: "Japanese",
            label: "Japanese",
            Country: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png',
            content: [{
                About: 'Master Japanese step by step, from A1 to A2. Elevate yourlanguage skills with our tailored, level- wise approach.'
            }, {
                About: 'Elevate your Japanese from B1 to B2 with precision and depth.Fluent communication awaits!'
            }, {
                About: 'Attain language excellence from C1 to C2. Dive deep into advanced Japanese for superior fluency and cultural mastery'
            }]
        }, {
            id: "French",
            label: "French",
            Country: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png',
            content: [{
                About: 'Master French step by step, from A1 to A2. Elevate yourlanguage skills with our tailored, level- wise approach.'
            }, {
                About: 'Elevate your French from B1 to B2 with precision and depth.Fluent communication awaits!'
            }, {
                About: 'Attain language excellence from C1 to C2. Dive deep into advanced French for superior fluency and cultural mastery'
            }]
        }, {
            id: "Sanskrit",
            label: "Sanskrit",
            Country: 'https://media.istockphoto.com/id/519611160/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=0HueaQHkdGC4Fw87s3DbeTE9Orv3mqHRLce88LV47E4=',
            content: [{
                About: 'Master Sanskrit step by step, from A1 to A2. Elevate yourlanguage skills with our tailored, level- wise approach.'
            }, {
                About: 'Elevate your Sanskrit from B1 to B2 with precision and depth.Fluent communication awaits!'
            }, {
                About: 'Attain language excellence from C1 to C2. Dive deep into advanced Sanskrit for superior fluency and cultural mastery'
            }]
        }
    ];

    return (
        <div className="grid grid-cols-1 ourcourses-tabs overflow-hidden w-[90vw] xl:w-[40vw] 3xl:w-[50vw]">

            <Tabs radius="md" size="sm" variant="light" aria-label="Dynamic tabs" items={tabs}>
                {((item) =>

                    <Tab className="h-full okay-iam" key={item.id} title={
                        <div className="flex items-center border border-slate-400 shadow-lg rounded-md px-[16px] py-[8px] space-x-2">
                            <div className="w-5 h-5 3xl:w-[21.45px] 3xl:h-[21.45px] overflow-hidden rounded-full">
                                <img className="w-full h-full object-cover" src={item.Country} />
                            </div>
                            <span className="text-[16px] font-[500]">{item.label}</span>
                        </div>
                    }>

                        <JackInTheBox>
                            <Card className="">
                                <CardBody className="p-0">
                                    <div className="rounded-xl pb-2 overflow-hidden grid grid-cols-2 border-2 border-slate-300">

                                        <p className="px-5 py-3 text-[#667085] bg-[#F9FAFB]">Level <ArrowDownwardIcon fontSize="small" className="text-[#667085] -mt-[6px]" /></p>
                                        <p className="px-5 py-3 text-[#667085] bg-[#F9FAFB]">About</p>


                                        <div className="flex mx-3 flex-row items-center">
                                            <div className="w-7 h-7 m-2 overflow-hidden rounded-full"><img src="https://s3-alpha-sig.figma.com/img/e048/37e2/2b69a171bcb6616df2ba441a240212d6?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ceihhIn1T9lMf1OuLNjD-Km~j1taTSyjNRLcZzOJXb-nIqpeCTdd4S6tE5DkHU-H2ngkb1pK4qTgzGzF1Kr85QCM~8VK91Zey4hDEMw~CNUjM82X833kIrFl6UD7Hq933Ii~CwZgwsj2rLhTtmfSMuzeXpke6VviImvwjcacpdmEFy2cUKw5R2EJ8vCoSfVCcq1m8hGh5dDf8qfOi0LETYh56F1iJp0R4kHy9NDcTJC4ougePHFS-b8-9mUepX1yE9umLfFCYhSxqbsGUd5~qdiTO1Hpu~IsxPzXF7f0zBEBfrcHXFcKHodD7FKHjREEOmJmo9WQTtIvJ4N3-qJT5Q__" /></div>
                                            <div className="flex flex-col">
                                                <p className="text-xs font-bold">A1 - A2</p>
                                                <p className="text-xs 3xl:text-[12px] font-[600] text-[#666680]">Check Syllabus</p>
                                            </div>
                                        </div>
                                        <div className="text-[14px] mx-3 my-2 text-[#666680]">{item.content[0].About}

                                        </div>


                                        <div className="flex mx-3 flex-row items-center">
                                            <div className="w-7 h-7 m-2 overflow-hidden rounded-full"><img src="https://s3-alpha-sig.figma.com/img/6a8c/3347/5a5bd04866ffcbaf905a88c2560ab8c1?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z3vbYIXak1pNZbk2Uw6E6AS818XzB2kXCd962foqLm1hlL-Qf-c3IvgFeRJ1W1Us3nVDElx3N7hebv45iZnQeDTWFHJe1xLW-pEwM4k4eCdj47Or3~gI8-Y4XrG7-tTB4d-9jhNH-c30XgVD8d26LamlHaaq8hsUMFlqgsvF-xvqEq74tJDGdJB3b0ntndehLzJqrRWYVw5lkEE3r8TsyW71XHR4eQNLy25HZAjJ60e~7SyOazy8INFZMBobF-XhjGU3dCgK9qVz9fMz07Fdi6d09O9eoAKDdSpfJJi2lRXxiMtBh-JdRelbAowwvSsYLjg-KOTBk-WUzOiZKdDQWQ__" /></div>
                                            <div className="flex flex-col">
                                                <p className="text-xs font-bold">B1 - B2</p>
                                                <p className="text-xs 3xl:text-[12px] font-[600] text-[#666680]">Check Syllabus</p>
                                            </div>
                                        </div>
                                        <div className="text-[14px] mx-3 my-2 text-[#666680]">{item.content[1].About}</div>


                                        <div className="flex flex-row mx-3  items-center">
                                            <div className="w-7 h-7 m-2 overflow-hidden rounded-full"><img src="https://s3-alpha-sig.figma.com/img/f8bc/ea60/209de895330e196e9c5167298098f11d?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHwfoGv2v~VRvRJBohnLLOUhBP2auY9Ey1zWjkcVLRCZrmfsVcqSYLxbraszeEW1qKusMkd-Jzr-kBRxFGUGmtLP-l32LVve1cx5lSIds3aXLdtaTKJ8b4HMeg~ZHCyMzkMZFdfpNsI5UCTeXJ47GLk~OPhZeQFpoW4iIQ4wAgH~450v72Eq9niN~Cl0TBZInE1WU6fYXbsB5ZJg5rACOQSKZOxU2k-4FKgwjRMCrQeEdiY6R6A1OAmW5hDt-OuAyBRRspFngqafnh0x9Y~3T6JTTJEZ0uneSD0gmAx2OhRCXskF6u7-jAem-zuyR9fzRUq558DiEPa~NveXJUA6Tg__" /></div>
                                            <div className="flex flex-col">
                                                <p className="text-xs font-bold">C1 - C2</p>
                                                <p className="text-xs 3xl:text-[12px] font-[600] text-[#666680]">Check Syllabus</p>
                                            </div>
                                        </div>
                                        <div className="text-[14px] my-2 mx-3 text-[#666680]">{item.content[2].About}</div>

                                    </div>
                                </CardBody>
                            </Card>
                        </JackInTheBox>
                    </Tab>

                )}
            </Tabs>
        </div >
    );
}
