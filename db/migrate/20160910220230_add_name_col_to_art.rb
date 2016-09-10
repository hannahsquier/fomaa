class AddNameColToArt < ActiveRecord::Migration[5.0]
  def change
    add_column :arts, :name, :stringra
  end
end
