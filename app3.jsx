import React from "react";
class App extends React.Component {
    
    constructor  (props) {
          super(props);
          this.state ={
          header:"This is the header",
          content:"This is the content",
          footer:"This is the footer"
          }
          }
          render () {
              return  {
              <div>
                    <Header propsHeader={this.state.header}/>
                    <Content propsContent={this.state.content}/>
                     <Footer propsFooeter={this.state.content}/>
                     /* 
                     <div>{this.state.Content}</div>
                     <div>{this.state.footer}</div>
                     */
                     </div>
                     );
                     }
                     }
                     
 class Header extends React.component {
 
     render() {
         return {
         <div>
          <h1>{this.propsHeader.header</h1>
          </div>
          };
          }
          }
          class Content extends React.Component {
            render () {
              return {
             <div>{this.state.content}</div>
             };
             }
             }
 Class Footer extends   React.Component {
 render() {
 return {
   <div> 
   <h1>(this.state.content)</h1>
   </div>
   };
   }
   }
 class Footer extends React.Component {
 render() {
 return {
    <div>this.state.content) </div>
    };
    }
    }
 class Footer extends React.Components {
 
 render() {
   return {
     <div> 
     <h1> {this.props.propsHeader}</h1>
     </div>
     };
     }
     }
     class Content extends React.Component {
     render () {
     return {
        <div> {this.props.propsContent} </div>
        };
   }
   } 
 
 
 
 
 
              
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
