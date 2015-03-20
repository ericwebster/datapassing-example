# demo-datapassing-example

Needed to support dynamic server side / client side data passing for a project. I didnt know how we would support iFrames 
and when the source of the iframe is determined and if i could pass client side data before the iframe source
was called.

On pageload all links and iframes are appended some additional URI encoded strings which are then manipulated on the sever side.

Server side in this case is a simple express application.
