var network;

function redrawAll() {
  // remove positoins
  for (var i = 0; i < nodes.length; i++) {
    delete nodes[i].x;
    delete nodes[i].y;
  }



  // create a network
  var container = document.getElementById("mynetwork");
  var data = {
    nodes: nodes,
    edges: edges
  };

  var options = {
    nodes: {
      shape: "dot",
      borderWidthSelected:10,
      scaling: {
        min: 10,
        max: 30
      },
      font: {
        size: 19,
        face: "Tahoma"
      }
    },
    edges: {
      width: 0.15,
      selectionWidth: 18,
      color: { inherit: "from" },
      smooth: {
        type: "continuous"
      }
    },
    physics: {
      stabilization: false,
      timestep:2.6,
      maxVelocity:70,
      barnesHut: {
        gravitationalConstant: -80000,
        springConstant: 0.001,
        springLength: 200
      }
    },
    interaction: {
      tooltipDelay: 200,
      hideEdgesOnDrag: true,
      hideEdgesOnZoom: true,
    }
  };


  network = new vis.Network(container, data, options);
}

redrawAll();
