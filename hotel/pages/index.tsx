import NextLink from "next/link";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import HomePage from "@/components/Home";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<HomePage/>
		</DefaultLayout>
	);
}
