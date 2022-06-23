
 const {__} = wp.i18n;
 wp.blocks.registerBlockType('gutenberg-demo-blog/gutenberg-demo',{
     title: __('gutenberg demo', 'gutenberg-demo'),
     icon: 'smiley',
     category: 'common',
     attributes: {
        skyColor:{ type:"string"},
        grayColor:{type:"string"}
     },
     edit : function( props) {
        function updateSky(event) {
            props.setAttributes({skyColor:event.target.value});
        }
        function updateGray(event) {
            props.setAttributes({grayColor:event.target.value});
        }
        return (
           <div>
            <input type="text" placeholder="enter sky color" onChange={updateSky} value={props.attributes.skyColor}/>
            <input type="text" placeholder="enter grass color" onChange={updateGray}  value={props.attributes.grayColor}/>
           </div>
        );
     },
    //  save : function( props) {
    //     return (
    //     <div><p>sky color is p mode {props.attributes.skyColor} and grass color is {props.attributes.grayColor} </p></div>
    //     );
    //  },
     deprecated:[{
        attributes: {
            skyColor:{ type:"string"},
            grayColor:{type:"string"}
         },
         save : function( props) {
            return (
            <div><h6>sky color is {props.attributes.skyColor} and grass color is {props.attributes.grayColor} </h6></div>
            );
         },

     },{
        attributes: {
            skyColor:{ type:"string"},
            grayColor:{type:"string"}
         },
         save : function( props) {
            return (
                <div><h1>sky color is h1 mode {props.attributes.skyColor} and grass color is {props.attributes.grayColor} </h1></div>
            );
         },

     }]
 })