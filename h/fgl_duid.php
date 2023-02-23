function fgl_duid()
{
    global $S;

    $d = array_pop($S);
    mkdir( "Graph/duid/".$d );
    
    $a = json_decode( array_pop($S), true );
    
    echo var_src( $a );
    
    $WD = "Graph/duid/".$d."/";
    
    foreach( $a as $k => $b ) {
        $S[]="  ".$k." ".$b."  ";   
        file_put_contents( $WD.$k, $b ); 
    }

    file_put_contents( $WD.'embed', '<iframe width="560" height="315" 
                                             src="https://www.youtube.com/embed/'.substr($a['link_0'],32,11).'" 
                                             title="YouTube video player" frameborder="0" allow="accelerometer; 
                                             autoplay; clipboard-write; encrypted-media; 
                                             gyroscope; picture-in-picture" allowfullscreen></iframe>' );

    copy("Graph/duid/adam-005/welcome", $WD."welcome");
    
    $S[] = "Graph/duid/".$d;
    
}
