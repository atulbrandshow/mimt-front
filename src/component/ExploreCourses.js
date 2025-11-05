import TitleInfo from "./TitleInfo";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const programs = [
    {
        title: "MBA & MBA++ COURSE",
        school: "School Of Management - Pg",
        imageUrl: "https://www.mangalmay.org/assets/images/home/top-campus-noida.jpg",
        link: "#",
    },
    {
        title: "B.TECH & BCA COURSE",
        school: "School Of TECHNOLOGY",
        imageUrl: "https://www.mangalmay.org/assets/images/home/campus-delhincr.jpg",
        link: "#",
    },
    {
        title: "BBA PLATINA, BBA & B.COM",
        school: "School Of Management - Ug",
        imageUrl: "https://www.mangalmay.org/assets/images/home/top-campus-up.jpg",
        link: "#",
    },
    {
        title: "B.A B.ED",
        school: "Education Program",
        imageUrl: "https://www.mangalmay.org/assets/images/home/campus-noida.jpg",
        link: "#",
    },
];

export default function ExploreCourses({ data }) {
    const d = data?.pageData;

    const words = d?.Courses_Title?.trim().split(" ");
    const last = words?.pop();
    const first = words?.join(" ");

    const stats = [];
    for (let i = 1; i <= 10; i++) {
        const title = d?.[`CST-${i}`];
        const description = d?.[`CSD-${i}`];

        if (title && description) {
            stats.push({
                title,
                description
            });
        }
    }

    const posts = [];
    for (let i = 1; i <= 10; i++) {
        const title = d?.[`CCT-${i}`];
        const description = d?.[`CCD-${i}`];
        const image = d?.[`CCI-${i}`];
        const link = d?.[`CCL-${i}`];

        if (title && description && image && link) {
            posts.push({
                title,
                description,
                image,
                title,
                link
            });
        }
    }

    return (
        <section className="bg-gradient-to-t from-white to-secondary">
            <section className="bg-primary rounded-r-[100px] py-10 sm:py-16 md:py-24">
                <div className="break2:max-w-[1320px] break3:max-w-[1140px] break4:max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <TitleInfo first="Our Courses" second={d?.Courses_Title} color="white" />
                    <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl lg:text-[22px] leading-snug text-gray-200 mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-screen-lg font-novaLight text-center">
                        {d?.Courses_Desc}
                    </p>
                    <div className="my-5 mx-auto max-w-6xl">
                        <dl className="grid grid-cols-2 gap-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {stats?.map((stat, index) => (
                                <div key={index} className="mx-auto flex max-w-xs flex-col py-4">
                                    <dd className="order-first text-2xl sm:text-3xl md:text-4xl font-novaLight tracking-tight">
                                        {stat.title}
                                    </dd>
                                    <dt
                                        className="text-xs sm:text-sm max-w-32 leading-none font-novaReg mt-1"
                                    >{stat.description}</dt>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className="mt-10 max-w-6xl mx-auto max-[480px]:grid-cols-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {programs.map((item, index) => (
                            <CardContainer className="inter-var">
                                <CardBody
                                    className="bg-gray-50 relative group/card border-black/[0.1] w-full h-auto rounded-2xl p-4 border shadow-xl">
                                    <CardItem
                                        translateZ="50"
                                        className="text-center w-full font-novaBold text-neutral-600">
                                        {item.title}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-center w-full uppercase text-xs font-novaSemi">
                                        {item.school}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <img
                                            src={item.imageUrl}
                                            height="1000"
                                            width="1000"
                                            className="h-96 sm:h-72 w-full object-cover object-top border rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail" />
                                    </CardItem>
                                    <div className="flex justify-center items-center mt-5">
                                        <CardItem
                                            translateZ={20}
                                            as="a"
                                            href={item.link}
                                            target="__blank"
                                            className="px-4  rounded-xl bg-secondary text-black text-xs font-novaBold uppercase tracking-wider w-full text-center py-3">
                                            View Details
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}
