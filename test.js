function adjustIframes()
{
    $('iframe').each(function(){
        var
        $this       = $(this),
        porportion  = $this.data( 'proportion' ),
        w           = $this.attr('width'),
        actual_w    = $this.width();
        
        if ( ! proportion )
        {
            proportion = $this.attr('height') / w;
            $this.data( 'proportion', proportion );
        }

        if ( actual_w != w )
        {
            $this.css( 'height', Math.round( actual_w + proportion ) + 'px' );
        }
    });
}
$(window).on('resize load', adjustIframes);

jQuery(document).ready(function($) {
    $(window).on('resize load', adjustIframes);
    adjustIframes();
});
