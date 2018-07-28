/** Upload and proxying blacklists. In the future this will live on-chain. */

interface Blacklist<T> {
    includes: (item: T) => boolean
}

/* tslint:disable:max-line-length */
export const imageBlacklist: Blacklist<string> = [
    'http://avivas.ru/img/topic/23850/20.jpg',
    'http://bogleech.com/nature/fly-microdon.jpg',
    'http://customerceobook.com/wp-content/uploads/2012/12/noahpozner420peoplemagazine.jpg',
    'http://edge.liveleak.com/80281E/ll_a_u/thumbs/2015/Jan/1/67f252081582_sf_3.jpg',
    'http://escolakids.uol.com.br/public/upload/image/variedades%20de%20formiga.jpg',
    'http://i1272.photobucket.com/albums/y391/mtgmtg_2012/mtgmtg_2012006/8575314572_bb657293cd_b_zps4d684b87.jpg',
    'http://img09.deviantart.net/c561/i/2015/005/4/b/psychedeliczen_id_by_psychedeliczen-d63npyv.jpg',
    'http://lifeinjapan.ru/upload/posts/mur2707.jpg',
    'http://reseauinternational.net/wp-content/uploads/2015/01/Sans-titre.jpg',
    'http://savepic.ru/11219364.jpg',
    'http://scienceblogs.com/photosynthesis/wp-content/blogs.dir/309/files/2012/04/i-85574ee42f4fc75ae3bb45e4f2bb998b-fly1.jpg',
    'http://st-listas.20minutos.es/images/2016-03/408680/list_640px.jpg?1458217580',
    'http://www.ecuavisa.com/sites/default/files/fotos/2017/01/04/hormiga.jpg',
    'http://www.quo.es/var/quo/storage/images/naturaleza/hormigas-de-fuego/1352329-1-esl-ES/las-hormigas-de-fuego-quieren-invadir-japon_ampliacion.jpg',
    'https://2.bp.blogspot.com/-76LDew482u8/WgGFasOlXtI/AAAAAAAANfU/CHw2LZO27Y04wRPuTjtqc9ajXDNurOuyACLcBGAs/s1600/Cephalotes%2Bporrrasi%2B2.jpg',
    'https://2.bp.blogspot.com/-fabo0S0G2PQ/WA0g5Uo7mdI/AAAAAAAAGVU/uA0rRKzmvKoFdgxzUEV6SkgAS0turqPHwCEw/s1600/Mating%2Bswarm.jpg',
    'https://3.bp.blogspot.com/-HaidYOAZcRo/WgGFOjEJqJI/AAAAAAAANfQ/jKm7VXb7_08gqJPDCNsHkM2fxaiKeQsGACLcBGAs/s1600/Cephalotes%2Bporrasi%2B1.jpg',
    'https://d2r55xnwy6nx47.cloudfront.net/uploads/2014/04/Eciton7j-Alex-Wild-Web.jpg',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRamUeYdOkZuUhgTr9drnicux-spHCow9d5slH8xeldMu1ODbi9JOl9b2R5Og',
    'https://i.blogs.es/05aca7/pyriformis13-xl/450_1000.jpg',
    'https://i.imgur.com/0XObSlG.jpg',
    'https://i.imgur.com/2s4Cb92.jpg',
    'https://i.imgur.com/546dU30.jpg',
    'https://i.imgur.com/GhSE4su.jpg',
    'https://i.imgur.com/LuA12nd.jpg',
    'https://i.imgur.com/NjB05Cl.jpg',
    'https://i.imgur.com/P6WASGn.jpg',
    'https://i.imgur.com/pL1FckF.jpg',
    'https://i.imgur.com/qbvU7fN.jpg',
    'https://i.imgur.com/R7jlBhg.jpg',
    'https://i.imgur.com/VKdTkV8.jpg',
    'https://i.imgur.com/XhwS8Ow.jpg',
    'https://img.esteem.ws/lk2hsivn08.jpg',
    'https://img.esteem.ws/hhhly37j23.jpg',
    'https://ipfs.io/ipfs/QmWMfcLnPFKL36hR4T4qiyBFWzV9yzN2fXaYZXQ3uA4nrr',
    'https://ipfs.pics/ipfs/QmXz6jNVkH2FyMEUtXSAvbPN4EwG1uQJzDBq7gQCJs1Nym',
    'https://myrmecos.files.wordpress.com/2010/04/imparis14.jpg?w=1400',
    'https://pbs.twimg.com/media/CoN_sC6XEAE7VOB.jpg:large',
    'https://photos.smugmug.com/Ants/Taxonomic-List-of-Ant-Genera/Lasius/i-gj7LzPm/0/XL/flavus5-XL.jpg',
    'https://s9.postimg.org/6xge0h2gv/image.jpg',
    'https://thumbs.gfycat.com/FakeWellwornAlaskanmalamute-size_restricted.gif',
    'https://thumbs.gfycat.com/CapitalPepperyAllosaurus-size_restricted.gif',
    'https://thumbs.gfycat.com/SmoothFilthyAmericanwigeon-size_restricted.gif',
    'http://www.ecuavisa.com/sites/default/files/fotos/2017/01/04/hormiga.jpg',
    'http://www.quo.es/var/quo/storage/images/naturaleza/hormigas-de-fuego/1352329-1-esl-ES/las-hormigas-de-fuego-quieren-invadir-japon_ampliacion.jpg',
    'https://s14.postimg.org/qjbmzlvap/The_man_from_taured_RZ.jpg',
    'https://s26.postimg.org/g1yai5ewp/hqdefault.jpg',
]

export const accountBlacklist: Blacklist<string> = [
    'aplomb',
    'iamgod',
]
