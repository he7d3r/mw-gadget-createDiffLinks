/**
 * Create links for diffs on [[w:MediaWiki:Spam-blacklist]]
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 */
( function ( mw, $ ) {
'use strict';

function createDiffLinks(){
	$('#mw-content-text').find('pre').each(function(){
		var i,
			reDiffNumber = /#(\d+).*$/g,
			diffLink = '<a href="' + mw.config.get( 'wgServer' ) +
				mw.config.get( 'wgScript' ) + '?diff=' + '$1">#$1</a>',
			$this = $(this),
			lines = $this.html().split( '\n' );
		for( i = 0; i< lines.length; i += 1 ){
			// \bexample.com   #123456
			lines[i] = lines[i].replace( reDiffNumber, diffLink );
		}
		$this.html( lines.join( '\n' ) );
	});
}

if ( mw.config.get( 'wgPageName' ) === 'MediaWiki:Spam-blacklist' && mw.config.get( 'wgAction' ) === 'view' ) {
	$( createDiffLinks );
}

}( mediaWiki, jQuery ) );