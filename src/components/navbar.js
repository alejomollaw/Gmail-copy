import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiSlider, BiHelpCircle } from 'react-icons/bi';
import { GoGear } from 'react-icons/go';
import { CgMenuGridO } from 'react-icons/cg';
import logo from '../images/logo.png';

function Icon({ clase, ...props }) {
	let clases = clase === undefined ? '' : (` ${clase}`);
	return(
		<button className={"navbar__icon" + clases} {...props}>
			{props.children}
		</button>
	);
}

class NavigationTop extends Component {
	constructor(props) {
		super(props);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	// Events handlers
	handleFocus(evt) {
		let parent = evt.target.parentNode;
		parent.classList.add("focused");
	}

	handleBlur(evt) {
		let parent = evt.target.parentNode;
		parent.classList.remove("focused");
	}

	render(){
		return(
			<header>
				<nav className="navbar">
					<div className="navbar__brand">
						<div>
							<Icon style={{transform: 'scaleX(1.15)'}}>
								<BsList viewBox="0 0 16 15" />
							</Icon>
						</div>
						<div className="navbar__brand-navlink-container">
							<NavLink to="/">
								<img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" />
							</NavLink>
						</div>
					</div>

					<div className="navbar__flex-container">
						<div className="navbar__search">
							<div className="navbar__search__form-container">
								<form>
									<div>
										<Icon>
											<AiOutlineSearch />
										</Icon>
									</div>
									<input
										type="text" placeholder="Buscar en el correo electronico"
										onFocus={this.handleFocus} onBlur={this.handleBlur}
									/>
									<div>
										<Icon clase="slader">
											<BiSlider />
										</Icon>
									</div>
								</form>
							</div>
							<div className="navbar__search__icons">
								<Icon>
									<BiHelpCircle />
								</Icon>
								<Icon>
									<GoGear />
								</Icon>
							</div>
						</div>

						<div className="navbar__profile">
							<Icon>
								<CgMenuGridO />
							</Icon>
							<div>
								<img src={logo} />
							</div>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

export default NavigationTop;
