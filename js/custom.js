// var left = $(function() {
// 	$('.shape').shape();
// 	$('#left').on('click', function() {
// 	$('.shape')
// 	.shape('set next side', '.second.side')
// 	.shape('flip left');	
// 	});
// });

// var right = $(function() {
// 	$('.shape').shape();
// 	$('#right').on('click', function() {
// 	$('.shape')
// 	.shape('set next side', '.ts')
// 	.shape('flip right');
// 	});
// });

// $(document).ready(left, right);


$(document)
  .ready(function() {
    var
      $project            = $('.shape.projects .ui.shape'),
      $directionButton = $('.shape.projects .direction .button'),
      handler
    ;
    // event handlers
    handler = {
      rotate: function() {
        var
          $shape    = $(this).closest('.buttons').prevAll('.ui.shape').eq(0),
          direction = $(this).data('direction') || false,
          animation = $(this).data('animation') || false
        ;
        if(direction && animation) {
          $shape
            .shape(animation + '.' + direction)
          ;
        }
      }
    };
    // attach events
    $project
      .shape()
    ;
    $directionButton
      .on('click', handler.rotate)
      .popup({
        position  : 'bottom center'
      })
    ;
  })
;