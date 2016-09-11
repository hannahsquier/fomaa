class AddLinkAndDescriptionColToArt < ActiveRecord::Migration[5.0]
  def change
    add_column :arts, :link, :string
    add_column :arts, :description, :text
  end
end
