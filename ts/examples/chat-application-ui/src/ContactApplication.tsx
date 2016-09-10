﻿// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

/// <reference path="API.ts" />

namespace example.chat {
	export class ContactApplication extends Application {
		
		// try ContactApplication 

		/* ---------------------------------------------------------
			VISUALIZER
		--------------------------------------------------------- */
		public render(): JSX.Element {

			return <div>
			
			<div id="wrapper">
				<div id="sidebar-wrapper">
					<ul className="sidebar-nav">
						<li className="sidebar-brand">
							<div className="talk-title">
								<h2> SamchonTalk </h2>
							</div>
						</li>
						<br/><br/>
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li>
							<a href="#">Shortcuts</a>
						</li>
						<li>
							<a href="overview.html">Overview</a>
						</li>
						<li>
							<a href="#">Events</a>
						</li>
						<li>
							<a href="aboutus.html">About</a>
						</li>
						<li>
							<a href="services.html">Services</a>
						</li>
						<li>
							<a href="contact.html">Contact</a>
						</li>
					</ul>

					<div className="user-info">
						<h3> INFORMATION </h3>
						<h5>Account ID: {this.id}</h5>
						<h5>Name: {this.name}</h5>
					</div>
				</div>

				<div id="page-content-wrapper">
					<div className="container-fluid">
					
						ContactApplication Page

					</div>
				</div>

			</div>
		</div>;

		}

		public static main(): void {
			ReactDOM.render(<ContactApplication />, document.body);
		}

		// protected refresh(): void {
		// 	super.refresh();

		// 	document.getElementById("messages_div").innerHTML = this.messages;
		// }

		// public static main(): void {
		// 	let url_variables: library.URLVariables = new library.URLVariables(location.href);
		// 	let uid: number = Number(url_variables.get("uid"));

		// 	let application: ChatApplication = new ChatApplication(uid);
		// 	ReactDOM.render(application.render(), document.body);
		// }
	}
}