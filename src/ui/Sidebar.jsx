import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
	background-color: var(--color-grey-0);
	padding: 3.2rem 2.4rem;
	border-right: 1px solid vaR(--color-grey-100);
	grid-row: 1/-1;

	display: flex;
	flex-direction: column;
	gap: 3.2rem;

	min-height: fit-content;
	max-height: auto;
`;

function Sidebar() {
	return (
		<StyledSidebar>
			<Logo />
			<MainNav />

			<Uploader />
		</StyledSidebar>
	);
}

export default Sidebar;
