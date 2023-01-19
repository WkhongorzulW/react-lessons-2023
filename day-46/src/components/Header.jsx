export default function Header(props) {
  return (
    <div className="ui menu">
      <div className="right menu">
        <a className="item active">
          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <i className="heart icon ">{props.wishlist.length}</i>
              <div class="menu">
                {props.wishlist.map((w, index) => {
                  return (
                    <div>
                      <div className="item">
                        {w.name}{" "}
                        <a
                          onClick={() =>
                            props.setWishlist(
                              props.wishlist.filter((wish) => wish.id !== w.id)
                            )
                          }
                        >
                          {" "}
                          X{" "}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </a>
        <a className="item">
          <i className="shopping basket icon"></i>
        </a>
      </div>
    </div>
  );
}
