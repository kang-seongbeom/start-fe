import avg from './avg';
import rand from './rand';

document.getElementById('avg').innerHTML = '평균: ' + avg(4, 5, 6, 'b', 8);
document.getElementById('rand').innerHTML = '난수: ' + rand(100);
