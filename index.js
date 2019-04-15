function addNewItem() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const itemValue = $(this).find('#shopping-list-entry');

        $('.shopping-list').append(
            `<li>
                <span class="shopping-item">${itemValue.val()}</span>
                <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
                </div>
            </li>`
        );
        itemValue.val("");
    });
    
}

function toggleItem() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}

function deleteItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function() {
        $(this).closest('li').remove();
    });
}

$(addNewItem);
$(toggleItem);
$(deleteItem);