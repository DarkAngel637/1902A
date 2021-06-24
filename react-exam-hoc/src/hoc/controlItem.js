import React from 'react'

// export default function controlItem(options){
//     return function(WrapComponent){
//         return class ControlItem extends React.Component{
//             render(){
//                 return <WrapComponent  {...this.props} {...options}/>    
//             }
//         }
//     }
// }


export default function controlItem(options){
    return function(WrapComponent){
        class ControlItem extends React.Component{
            render(){
                const {forwardedRef, ...rest} = this.props;
                return <WrapComponent ref={forwardedRef}  {...rest} {...options}/>    
            }
        }

        return React.forwardRef((props, ref) => {
            return <ControlItem {...props} forwardedRef={ref} />;
        });
    }
}